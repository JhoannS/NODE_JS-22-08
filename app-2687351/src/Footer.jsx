const Footer = () => {
  return (
    <footer>
      <div className="redes">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
      </div>
      
      <div className="otras">
        <span>Terminos de Uso Web</span>
        <span>Aviso de Privacidad</span>
        <span>Politica de tratamiento de datos</span>
        <span>Revision de pago</span>
        <span>Politicas de garantias</span>
      </div>
      
      <div className="copy">
      <div class="reloj">
    <p class="fecha"></p>
    <p class="tiempo"></p>
</div>
      <i class="fa-regular fa-copyright">2023 Starbucks Cofee Company. Reservados todos los derechos <br />Jhoan Zamudio, 2687351 </i>
      </div>
     
      
    </footer>
  );

};


export default Footer;
