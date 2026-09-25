export function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "We need a name for the delivery";
  }

  const cleanPhone = form.phone.replace(/\s+/g, "");
  if (!cleanPhone) {
    errors.phone = "Please enter your TeleBirr number";
  } else if (!/^(?:\+251|0)9\d{8}$/.test(cleanPhone)) {
    errors.phone = "Use 09... or +2519... (a TeleBirr number has 10 digits)";
  }

  if (!form.area) {
    errors.area = "Please choose a delivery area";
  }

  return errors;
}