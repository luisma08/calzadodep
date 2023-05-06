const Services = ({ servicesData }) => {

    return ( 
        <section className="py-2">
            <div className="container f-elements f-direction-column gap-lg f-elements--center">
                <h3 className="section__title section__title-sm">Nuestros Servicios</h3>
                <div className="f-elements f-elements--responsive gap-md">
                    <div className="card card--hero">
                        <div className="f-elements f-direction-column f-elements--center gap-xs t-align-center">
                            <img width="48" height="48" src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/22e8a90a-7941-47d0-ba7d-9e178cf4b7df___780885f8d1cbcfa9d872ddcc0d22eef6.png" alt=""
                            style={{backgroundColor:"white", padding: 30, borderRadius:20}} 
                            />
                            <h3 className="card__title card__title--lg">Ubica la tienda más cercana</h3>
                            <p className="card__title card__title--sm">Tenemos una tienda cerca a ti, ubícala y pruébate el calzado que desees.</p>
                        </div>
                    </div>
                    <div className="card card--hero">
                        <div className="f-elements f-direction-column f-elements--center gap-xs t-align-center">
                            <img width="48" height="48" src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/e3ca2ded-d821-4ad1-8c4c-3f76fe48efe1___5b284b4b8585462c6bae8f21e805a04e.png" alt=""
                            style={{backgroundColor:"white", padding: 30, borderRadius:20}} 
                            />
                            <h3 className="card__title card__title--lg">¿Conoces Calzado Dep Sostenible?</h3>
                            <p className="card__title card__title--sm">Sé parte de nuestro proyecto de RSE y se parte del cambio.</p>
                        </div>
                    </div>
                    <div className="card card--hero">
                        <div className="f-elements f-direction-column f-elements--center gap-xs t-align-center">
                            <img width="48" height="48" src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/83a69fe7-95ca-474f-8290-fb79fad9a109___65a80d83bed79ed2ec10df9a69f59089.png" alt=""
                            style={{backgroundColor:"white", padding: 30, borderRadius:20}} 
                            />
                            <h3 className="card__title card__title--lg">Seguimiento de pedidos</h3>
                            <p className="card__title card__title--sm">Fácil y Rápido con tu número de pedido.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Services;