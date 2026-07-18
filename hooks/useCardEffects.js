import { useEffect } from 'react'

// Shared hover/reveal behavior for all `.card` elements (Theme.module.css):
// a cursor-tracking spotlight + crisp 3D tilt while the mouse moves over a
// card, and a scroll-triggered fade/rise the first time a card enters view.
// Centralized here so every page gets the same effect from one place instead
// of copy-pasting the same useEffect block per page.
export function useCardEffects(cardClassName) {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${cardClassName}`)

    function handleMouseEnter() {
      // Kill the reveal transition so the tilt tracks the cursor 1:1 instead
      // of easing toward each new position (the leftover 0.6s transition
      // from the scroll-reveal below was making the tilt feel laggy).
      this.style.transition = 'none'
    }

    function handleMouseMove(e) {
      const rect = this.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top

      this.style.setProperty('--spotlight-x', `${(px / rect.width) * 100}%`)
      this.style.setProperty('--spotlight-y', `${(py / rect.height) * 100}%`)

      const rotateY = (px - rect.width / 2) / 30
      const rotateX = (rect.height / 2 - py) / 30
      this.style.transform = `translateY(-6px) scale(1.015) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    function handleMouseLeave() {
      this.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)'
      this.style.transform = ''
    }

    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cards.forEach(card => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(20px)'
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(card)
    })

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
      observer.disconnect()
    }
  }, [cardClassName])
}
