export var settings = {
    columns: {  
        Asset: {  
          title: 'Asset',  
          filter: true,  
        },  
        Description: {  
          title: 'Description',  
          filter: true,  
        },  
        Quantity: {  
          title: 'Quantity',  
          filter: true,  
        },
        AssetType :{
          title: 'AssetType',  
          filter: true,
        } ,
        Owner :{
            title: ' Owner',  
            filter: true,
          }  
      },  
      pager: {  
        display: true,  
        perPage: 10  
      },  
      actions: {  
        columnTitle: 'Action',  
        add: true,  
        edit: true,  
        delete: true,  
        position: 'left'  
      },  
      attr: {  
        class: 'table table-striped table-bordered table-hover'  
      },  
      defaultStyle: true  
    }; 