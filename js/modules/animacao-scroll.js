export default function initAnimaScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length){
    const windoRule = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionView = (sectionTop - windoRule) < 0;
        if(isSectionView){
          section.classList.add('ativo');
        }else
            section.classList.remove('ativo');
      })
    }

    animaScroll(); //Para ativar pelo menos uma vez!
    window.addEventListener('scroll', animaScroll);
  }     
}
