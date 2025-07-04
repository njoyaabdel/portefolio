export const validateString = (value: unknown, maxLenght: number) => {
  if (!value || typeof value !== "string" || value.length > maxLenght) {
    return false
  }
  return true
}
export const getErrorMessage = (error: unknown): string => {
  let message
  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  } else if (typeof error === "string") {
    message = error
  } else {
    message = "An unknown error occurred"
  }
  return message
}