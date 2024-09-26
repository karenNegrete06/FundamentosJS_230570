// Repaso de Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practixca 05: Repaso de Objetos en Java Script");

console.log("%c1.- Variables Independientes ", style_console);

let producto_Nombre="Computadora  Gammer Laptop 17\"";
let producto_Marca="Asus";
let producto_Modelo="TUF 17";
let Producto_precio=15749.50;
let producto_Disponibilidad=true;
let producto_SKU=Symbol("TUF707VV-HX221W")
let producto_Stock=15;
let producto_Imagen= null;
let producto_Barcode;
let producto_Categorias=["Electronicos","Computación","Gamming","Promociones Buen Fin","Mejor Valorados"];


console.log(`Los datos del PRODUCTO son: \n 
    Nombre: ${producto_Nombre}, Tipo de dato <${typeof(producto_Nombre)}>
    Marca: ${producto_Marca}, Tipo de dato <${typeof(producto_Marca)}>
    Modelo: ${producto_Modelo}, Tipo de dato <${typeof(producto_Modelo)}>
    Precio: ${Producto_precio}, Tipo de dato <${typeof(Producto_precio)}>
    Disponibilidad: ${producto_Disponibilidad}, Tipo de dato <${typeof(producto_Disponibilidad)}>
    Stock: ${producto_Stock}, Tipo de dato <${typeof(producto_Stock)}>
    Barcode: ${producto_Barcode}, Tipo de dato <${typeof(producto_Barcode)}>
    Imagen: ${producto_Imagen}, Tipo de dato <${typeof(producto_Imagen)}>
    Categorias: ${producto_Categorias}, Tipo de dato <${typeof(producto_Categorias)}>`);


    console.log("En el caso del SKU al ser un Simbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(producto_SKU);
    console.log(typeof(producto_SKU));

// ahora lo declaramos como un objeto
console.log("%c2.- Variables Independientes ",style_console);
    let producto= 
    {
        ID: 3216,
        Nombre: "Tenis Deportivos",
        Marca: "Nke",
        Modelo: "Jodan ' 24",
        Precio: 3361.25,
        Disponiblidad: false,
        Stock: 0,
        SKU: "DZ5485-612",
        Imagen: "../Assets/Products/sneaker/JORDAN.png",
        Barcode: null,
        Categorias:["Deportes", "Tenis","Juvenil"]

    
    }

    // Ahora leemos el objeto 
    console.table(producto);

    // Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre Completo del PRODUCTO: ${producto.Nombre} ${producto.Marca} ${producto.Modelo} `)
    console.log(`Precio: ${producto.Precio}`)
    if(producto.Disponiblidad ==0)
    console.log(`Estatus: Agotado`)
    else
    console.log(`Estatus: ${producto_Stock} , Unidades disponibles`)


    console.log("%c3.- Destructuración de Objetos ",style_console);
    let producto2= 
    {
        
        Clave: 316,
        Nombre: "Lentes para sol",
        Marca: "Oakley",
        Modelo: "QNTM Kato",
        Precio: 6829.00,
        Disponiblidad: true,
        Stock: 5,
        SKU: "OO9481D-03",
        Imagen: "../Assets/Products/sunglasses/katoRed.png",
        Barcode: 888392491626,
        Categorias:["Deportes", "Lentes","Accesorios"]

    
    }

    let Comprador=
    {
        Clave:3216,
        Nombre: "Karen",
        Apellidos: "Negrete Hernández",
        Tipo: "Frecuente",
        Correo: "karen@gmail.com",
        PaisOrigen: "México",
        SaldoActual: 14000.00
    }
    let Pedido=
    {
        ID: 5816,
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad: 2,
        Estatus: "Carrito de compra",
        TipoPago: "Tarjeta de credito"
    }

    // 

    let { Precio: producto_precio2}=producto2;
    let {Cantidad:pedido_cantidad}=Pedido;
    let {SaldoActual:Cliente_SaldoActual}=Comprador;
    let Costo_compra=Producto_precio*pedido_cantidad;

    
    console.log(`El cliente ha agregado a su carrito de compras ${pedido_cantidad} unidades, con un costo total de: ${Costo_compra}`);
    if(Costo_compra<Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente");
    

    //Actualizar 

    console.log("%c4 - Actualización de los valores de lasm propiedades de un objeto", style_console);

    console.log(`El objeto actualmente tiene los siguentes valores ${producto2}`)
    console.log(JSON.stringify(producto2,null,2));
    console.log(`Por cuestiones de inflación el costo del prodiucto ha cambiado y debe ser actualizado .... de $6,915.50`)

    producto2.Precio=6915.50;
    console.log(`Los nuevos valores de Producto son: `)
    console.log(producto2);

    // ¿Puedo cambiar no solo el valor si no tambien el tipo de dato en JavaScript?
    console.log("-------------------------------------")
    console.log(`El objeto actualmente tiene los siguentes valores`)

    let TipoDisponibilidad=typeof(producto2.Disponiblidad) 
    console.log(`el tipo de dato de la disponibilidad es: ${TipoDisponibilidad}`)
    console.log(JSON.stringify(producto2,null,2));
    producto2.Disponiblidad="Si";
    let nuevoTipoDisponibilidad=typeof(producto2.Disponiblidad)
    console.log(producto2)
    console.log(`el nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

    //Agregar nuevas propiedades al objeto

    console.log("%c5 - Agregar nuevas propiedades al objeto", style_console);

    //
    console.log("Los datos actuales del Comprador son:")
    console.table(Comprador);
    Comprador[`Direción`]= "Av. Benito Juarez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
    Comprador[`Tipo`]="Nuevo Cliente"
    Comprador[`ActividadesRecientes`]=true
    Comprador[`TotalCompras`]=3516.25
    console.log("Despues de haber agregado las propiedades Direccion, Tipo, ActividadesRecientes y TotalCompras.....")
    console.table(Comprador);

    // Eliminar propiedades existentes de un objeto

    console.log("%c6.- Eliminar propiedades existentes de un objeto", style_console);

    console.log("La estructura y valores del objeto PEDIDO son previas a la modificación")
    console.table(Pedido)
    delete Pedido.TipoPago
    console.log("Despues de la modificación")
    console.table(Pedido)

    //
    
    console.log("%c7.- Metodos para  controlar la mutailidad de losobjetos, congelación (FREEZE)", style_console);
    // SI DESEAMOS NO PERMITIR QUE LOS OBJETOS SEAN MODIFICADOS NI EN ESTRUCTURA NI EN VALOR UTILIZAREMOS EL METODO FREEZE (CONGELAR)
    console.log(`La estructura actual del objetoComprador es: `)
    console.table(Comprador);
    Object.freeze(Comprador);
    //intentamos agregar, eliminar o modificar los valores de sus propiedades 
    Comprador.FechaUltimaCompra = "05/09/2024 10:15:25" 
    delete Comprador.Tipo;
    Comprador.Direción= "Calle 16 de Septiembre #102, Col. Manantiales, Huachinango, Puebla, México";
    console.log(`Verificamos si se realizaron los cambios en el objeto COMPRADOR: `)
    console.table(Comprador);


    console.log("%c8.- Metodos para  controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
    // Sim embargo en el caso que desemos poder podificar los valores  del las  propiedades del Objeto, pero no su estructura, usaremos SEAL
    console.log("Objeto antes de ser modificados: ")
    console.table(Pedido);
    // Sellamos el objeto
    Object.seal(Pedido);
    // Intentamos modificar su estructura 
    Pedido[`FechaPedido`]="25/09/2024 11:05:03"
    delete Pedido[`Cantidad`]
    console.log(`Verificamos si se realizaron los cambios en el objeto Pedido:`)
    console.table(Pedido);
    // Ahora intentamos modificar el valor de las propiedades 
    Pedido.Cantidad=5
    console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO: `)
    console.table(Pedido);

    console.log("%c9.- Desestructuración de 2 o más Objetos", style_console);

    let {Precio: productoPrecio, Marca: ProductoMarca}= producto
    let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo}=Comprador

    // Transformar valores cuantitativos en cualitativos

    if(productoPrecio>2000)
        productoPrecio="Caro"
    else
    productoPrecio="Barato"

    if(clienteSaldo>0)
        clienteSaldo="A favor"
    else if (clienteSaldo<0)
        clienteSaldo="En contra"
    else
    productoPrecio="Sin deuda"

    // Transformar valores cualitativos en cuantitativos 
    let clienteNivel;

    if(clienteTipo=="Premium")
        clienteNivel=1
    if(clienteTipo=="Freemium")
        clienteNivel=2
    if(clienteTipo=="No identificado")
        clienteNivel=3

    // Clasificación al cliente por su país de origen

    if(clientePais=="México")
        clientePais="Nacional"
    else
    clientePais="Extranjero"

    let datosClientePromociones={clienteCorreo, clientePais, clienteNivel, clienteSaldo, producto_Marca, productoPrecio}

    // El nuevo objeto que creamos seria un ejemplo de la imformación que enviaremos al area de Marketing para la difusión de promociones
    console.log("los datos del cliente y sus hábitos de compra son: ")
    console.table(datosClientePromociones);


    // Operaciones sobre Objetos
    // Unión de Objetos
    console.log("%c10.- Unión de Objetos usando el metodo de asignación (ASSING)", style_console);
    
    console.log("Imprimimos la estructura y valores de Objeto Producto")
    console.table(producto);

    console.log("Imprimimos la estructura y valores del Objeto Pedido")
    console.table(Pedido);
    // Suponiendo que el usuario ya realizo el pago el pedido se convertira en una VENTA  que requiere información de ambos objetos
    const Venta = Object.assign(producto, Pedido);
    console.log("Consultamos este nuevo objeto VENTA") 
    console.table(Venta);








    /*let spotifyUser={
        name: "",
        nickname: "",
        email: "",
        password: "",
        rol: "",
        since: "",
    }*/


    

    