# Future Roadmap (Could-Haves)

These are features that were triaged as "Could-Haves" and intentionally left out of the final capstone build to ensure the main flow, authentication, and performance metrics were perfected on time.

- **Real Database Integration:** Currently using an in-memory mock database (`lib/db.js`). Would migrate to PostgreSQL via Prisma.
- **Payment Gateway:** Would integrate TeleBirr or Stripe for real checkout processing.
- **Admin Product Management:** A UI for staff to add/remove menu items.
- **Order History CSV Export:** The export is built, but could be extended to support date-range filtering.