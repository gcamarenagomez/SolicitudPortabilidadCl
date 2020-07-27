public with sharing class PortabilidadController {

    @AuraEnabled
    public static List<String> getPicklistValues(String objName, string fldName, Boolean nullRequired){
        List<String> optionList = new List<String>();
        Map<String, Schema.SObjectType> globalDescribe = Schema.getGlobalDescribe();
        Map<String, Schema.SObjectField> fieldMap = globalDescribe.get(objName.toLowerCase()).getDescribe().fields.getMap();
        List<Schema.PicklistEntry> picklistValues = fieldMap.get(fldName).getDescribe().getPicklistValues();
        if(nullRequired == true){
            optionList.add('--Ninguno--');
        }
        for(Schema.PicklistEntry picklistValue : picklistValues){
            optionList.add(picklistValue.getValue());
        }
        return optionList;
    }

    @AuraEnabled
    public static void saveProductoPortabilidad(String leadId, String acctNo, String prodType, Boolean blockProd){
        Producto_Portabilidad__c producto = new Producto_Portabilidad__c();
        producto.Prospecto__c = leadId;
        producto.Name = prodType + ' No. ' + acctNo;
        producto.Numero_de_cuenta__c = acctNo;
        producto.Producto__c = prodType;
        producto.Bloquear__c = blockProd;
        insert producto;
    }


}
