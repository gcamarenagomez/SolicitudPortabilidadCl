({
    doInit : function(component, event, helper) {
        helper.fetchPicklistVal(component, 'Banco_Origen__c');
    },

    simulaValidacion : function(component, event, helper){
        component.set('v.statusValidacion', 'Validando');
        setTimeout(function(){
            component.set('v.statusValidacion', 'Validado');
        }, 2500);
    }
})
