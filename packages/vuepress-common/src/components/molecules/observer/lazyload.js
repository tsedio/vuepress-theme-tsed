export default {
  inserted: el => {
    function display() {
      const imgEl = el.querySelector('img')

      if (imgEl) {
        imgEl.addEventListener('load', () => {
          setTimeout(() => {
            imgEl.classList.remove('opacity-0')
          }, 100)
        })
        imgEl.addEventListener('error', () => console.log('error'))
        imgEl.src = imgEl.dataset.url
      } else {
        const iframe = el.querySelector('iframe')

        if (iframe) {
          iframe.src = iframe.dataset.url
        }
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          display()
          observer.unobserve(el)
        }
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: '0'
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }

    if (window['IntersectionObserver']) {
      createObserver()
    } else {
      display()
    }
  }
}
