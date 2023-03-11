const filmStrip = document.querySelectorAll(".film-strip-grid")

const filmStripObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    root: document,
    rootMargin: '0% 0% 0% 0%',
})

filmStrip.forEach(filmStrip => { filmStripObserver.observe(filmStrip) })

