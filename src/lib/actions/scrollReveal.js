/**
 * Svelte action for intersection observer - triggers 'visible' class on scroll
 * @param {HTMLElement} node
 * @param {{ threshold?: number, rootMargin?: string, once?: boolean }} options
 */
export function scrollReveal(node, options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove('visible');
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
