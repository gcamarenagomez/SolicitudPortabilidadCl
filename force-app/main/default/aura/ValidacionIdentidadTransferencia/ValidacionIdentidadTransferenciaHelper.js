({
    fetchPicklistVal : function(component) {
        var action = component.get('c.getPicklistValues');
        action.setParams({
            "objName" : component.get('v.objectName'),
            "fldName" : component.get('v.bancosPicklist'),
            "nullRequired" : false
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
