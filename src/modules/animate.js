function handleIntersection(entries) {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInDown');
      // observer.unobserve(entry.target);
    }
  });
}

export const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });
