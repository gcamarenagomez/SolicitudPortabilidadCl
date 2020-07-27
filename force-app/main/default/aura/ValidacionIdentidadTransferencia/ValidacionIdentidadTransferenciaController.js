({
    doInit : function(component, event, helper) {
        helper.fetchPicklistVal(component);
    },

    simulaValidacion : function(component, event, helper){
        component.set('v.statusValidacion', 'Validando');
        setTimeout(function(){
            component.set('v.statusValidacion', 'Validado');
        }, 2500);
    }
})
