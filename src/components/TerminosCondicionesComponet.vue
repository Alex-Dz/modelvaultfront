<template>
    <div class="terms">
      <h1>Términos y Condiciones de ModelVault</h1>
      <div class="scrollable">
        <p>
            Bienvenido/a a ModelVault, una plataforma diseñada para que puedas llevar el control de las versiones de modelos 3D para impresión, donde tú, como usuario, eres el protagonista. A través de ModelVault, tendrás la libertad de compartir tus proyectos con otros usuarios o mantener el control de ellos por tu cuenta, ya sea para su impresión en 3D o para su uso en otros proyectos. Además, tendrás la oportunidad de crear nuevas variantes de modelos existentes siempre y cuando cuentes con la aprobación de los creadores originales.
          </p>
          <p>Al utilizar los servicios de ModelVault, aceptas los siguientes términos y condiciones:</p>
          
          <ol>
            <li>Registro de usuario:
                <ol class="sub">
                    <li>Para acceder y utilizar los servicios de ModelVault, debes crear una cuenta de usuario proporcionando información precisa y actualizada.</li>
                    <li>Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, así como de todas las actividades que se realicen a través de tu cuenta.</li>
                </ol>
            </li>
            <li>Uso de la plataforma:
                <ol class="sub">
                    <li>ModelVault te otorga una licencia limitada, no exclusiva, para acceder y utilizar la plataforma y sus servicios de acuerdo con estos términos y condiciones.</li>
                    <li>No podrás utilizar la plataforma con fines ilegales, difamatorios, obscenos, ofensivos o que violen los derechos de terceros.</li>
                    <li>ModelVault se reserva el derecho de modificar, suspender o interrumpir temporal o permanentemente los servicios sin previo aviso.</li>
                </ol>
            </li>
            <li>Propiedad intelectual:
                <ol class="sub">
                    <li>Los modelos 3D publicados en ModelVault son propiedad de sus respectivos creadores. No adquieres ningún derecho de propiedad sobre los modelos al utilizar la plataforma.</li>
                    <li>Al publicar un modelo en ModelVault, otorgas a otros usuarios el derecho de visualizar, descargar y, si lo permites, crear variantes del modelo.</li>
                </ol>
            </li>
            <li>Responsabilidad del usuario:
                <ol class="sub">
                    <li>Eres el único responsable del contenido que publiques en ModelVault, incluyendo modelos 3D, comentarios y cualquier otro tipo de información.</li>
                    <li>Asegúrate de tener los derechos necesarios sobre los modelos que publiques y respeta los derechos de autor de terceros.</li>
                </ol>
            </li>
            <li>Colaboración y variantes:
                <ol class="sub">
                    <li>Puedes colaborar con otros usuarios en proyectos y compartir modelos 3D con ellos a través de ModelVault.</li>
                    <li>Al crear variantes de modelos existentes, debes obtener la aprobación de los creadores originales antes de publicar las variantes.</li>
                </ol>
            </li>
            <li>Privacidad y protección de datos:
                <ol class="sub">
                    <li>ModelVault cumple con la legislación colombiana aplicable en materia de privacidad y protección de datos personales.</li>
                    <li>Al utilizar la plataforma, aceptas y autorizas expresamente a ModelVault para recopilar, almacenar y procesar tus datos personales de acuerdo con la Política de Privacidad.</li>
                    <li>Tus datos personales serán utilizados con el propósito de brindarte los servicios de ModelVault, mejorar tu experiencia como usuario y cumplir con las obligaciones legales correspondientes.</li>
                    <li>Tienes el derecho de acceder, corregir, actualizar o suprimir tus datos personales, así como de oponerte al tratamiento de los mismos.</li>
                    <li>Si tienes alguna pregunta o inquietud sobre el tratamiento de tus datos personales, puedes contactarnos a través de los medios proporcionados en la plataforma.</li>
                </ol>
            </li>
            <li>Modificaciones de los términos y condiciones:
                <ol class="sub">
                    <li>ModelVault se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Te notificaremos sobre los cambios significativos y podrás revisar la versión actualizada en la plataforma.</li>
                </ol>
            </li>
            <li>Limitación de responsabilidad:
                <ol class="sub">
                    <li>ModelVault no se hace responsable de los daños directos, indirectos, incidentales o consecuentes que puedan surgir del uso de la plataforma.</li>
                    <li>ModelVault no garantiza la disponibilidad ininterrumpida de la plataforma ni la corrección de los errores o defectos.</li>
                </ol>
            </li>
          </ol>
          <p>Al utilizar ModelVault, reconoces y aceptas que has leído, entendido y aceptado estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de los términos, te recomendamos que no utilices los servicios de ModelVault.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TermsAndConditions",
  }
  </script>
  
  <style scoped>
    .terms{
        display: flex;
        flex-direction: column;
        max-height: 80%; 
        overflow: auto;
        padding: 1rem;
    }

    .sub{
        list-style-type: disc;
    }
  </style>
  