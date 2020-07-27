@IsTest
public class PortabilidadControllerTest {
    
    @IsTest
    static void testGetPicklistValuesNullNotRequired(){
        List<String> picklistVal = new List<String>();
        picklistVal = PortabilidadController.getPicklistValues('Account', 'Industry', false);
        System.assertNotEquals(0, picklistVal.size());
    }

    @IsTest
    static void testGetPicklistValuesNullRequired(){
        List<String> picklistVal = new List<String>();
        picklistVal = PortabilidadController.getPicklistValues('Account', 'Industry', true);
        System.assert(1<picklistVal.size(), 'List must contain at least 1 value');
    }

    @TestSetup
    static void insertLead(){
        Lead lead = new Lead();
        lead.FirstName = 'Prospecto';
        lead.LastName = 'Prueba';
        lead.Rut__c = 'test rut';
        insert lead;
    }

    @IsTest
    static void testInsertProductoPortabilidad(){
        Test.startTest();
        Lead l = [Select Id, Name, Rut__c from Lead where Name = 'Prospecto Prueba' and Rut__c='test rut' LIMIT 1];
        PortabilidadController.saveProductoPortabilidad(l.Id, '12345678', 'Cuenta Corriente', true);
        System.assertEquals(1, [Select Id from Producto_Portabilidad__c].size());
        Test.stopTest();
    }
}
