export function validateEmail(email: string): boolean {
    if (email.includes("@") && email.includes(".")) {
      return true;
    } else {
      return false;
    }
  }