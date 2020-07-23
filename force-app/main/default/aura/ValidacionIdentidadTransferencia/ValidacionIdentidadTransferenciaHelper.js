({
    fetchPicklistVal : function(component, fieldName) {
        var action = component.get('c.getSelectOptions');
        action.setParams({
            "objObject" : component.get('v.objInfo'),
            "fld" : fieldName
        });
        var opts = [];
        action.setCallback(this, function(response){
            if(response.getState() == 'SUCCESS'){
                var allValues = response.getReturnValue();
                component.set('v.bancos', allValues);
            }
        });
        $A.enqueueAction(action);
    }
})
