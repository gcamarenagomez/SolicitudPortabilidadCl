({
    guardarProductoHandler : function(component) {
        debugger;
        var action = component.get('c.saveProductoPortabilidad');
        action.setParams({
            'leadId' : component.get('v.leadId'),
            'acctNo' : component.get('v.numCta'),
            'prodType': component.get('v.tipoProducto'),
            'blockProd' : component.get('v.bloquear')
        });
        action.setCallback(this, function(response){
            var toastEvent = $A.get("e.force:showToast");
            if(response.getState() === 'SUCCESS'){
                console.log('Inserción exitosa');
                toastEvent.setParams({
                    mode: 'dismissible',
                    title: '&Eacute;xito',
                    message: 'El producto se guard&oacute; correctamente',
                    type: 'success'
                });
                component.set('v.insertadoExitosamente', true);
                toastEvent.fire(); 
            }
            else{
                console.log('Error de inserción');
                toastEvent.setParams({
                    mode: 'dismissible',
                    title: 'Error',
                    message: 'Ocurri&oacute; un error al guardar el producto',
                    type: 'error'
                });
                toastEvent.fire(); 
            }
                       
        });
        $A.enqueueAction(action);
    }
})
