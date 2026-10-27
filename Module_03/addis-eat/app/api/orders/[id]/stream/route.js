export async function GET(request, { params }) {
  const { id } = await params;

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data) => controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);

      let status = "Preparing";
      let count = 0;

      send({ status });

      const interval = setInterval(() => {
        count++;
        if (count === 1) status = "Out for Delivery";
        if (count === 3) status = "Delivered";

        send({ status });

        if (count === 3) {
          clearInterval(interval);
          controller.close();
        }
      }, 5000);

      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}