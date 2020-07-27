# SolicitudPortabilidadCl

Contiene los componentes para crear un flujo de solicitud de Portabilidad Financiera en Salesforce según lo requerido por la legislación vigente en Chile al mes de junio 2020. 

Supone la Modificación del modelo de datos:

# Objeto Lead:
* Banco_Origen__c: Picklist. con la lista de Bancos de Chile
* Numero_de_Cuenta__c: Text. Numero de cuenta para validar identidad mediante transferencia
* Rut__c: Text. Rol Único Tributario
* Razon_Social_Proveedor_Inicial__c: Text. Nombre del Banco al que se le solicita la portabilidad
* Sitio_Web_Proveedor_Inicial__c: URL. Sitio web del proveedor inicial
* Trabajador_Independiente__c: Indica si el cliente es un trabajador independiente
* Renta_Liquida__c: Renta liquida del cliente
* Nuevo Tipo de Registro: Portabilidad Financiera
* Lead Process: Portabilidad Entrante con las siguientes etapas: {Solicitud Ingresada, Análisis, Oferta Enviada}

