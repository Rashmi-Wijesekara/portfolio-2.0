export const scrolling = (ref) => {
	ref.current.scrollIntoView({ behavior: "smooth" });
}