const PREFILL_KEY = "lqu_prefill_course";

export function setPrefillCourse(course: string) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(PREFILL_KEY, course);
    window.dispatchEvent(new Event("lqu-course-prefill"));
  }
}

export function consumePrefillCourse(): string {
  if (typeof window === "undefined") return "";
  const value = sessionStorage.getItem(PREFILL_KEY) || "";
  if (value) sessionStorage.removeItem(PREFILL_KEY);
  return value;
}

export function peekPrefillCourse(): string {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(PREFILL_KEY) || "";
}
