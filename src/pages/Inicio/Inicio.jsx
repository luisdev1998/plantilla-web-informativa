import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"
import Form from "../../components/Form/Form"

export default function Inicio(){
    return(
        <>
            <section 
                className="banner" 
                style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}>
            </section>
            <section className="flex horizontal-center">
                <div className="container container-space">
                    <h1 className="text-center">Conoce aquí <strong>Nuestros Proyectos</strong></h1>
                    <div className="horizontal-col-2 gap-2em">
                        <a className="card-img" style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}></a>
                        <a className="card-img" style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}></a>
                        <a className="card-img" style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}></a>
                        <a className="card-img" style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}></a>
                        <a className="card-img" style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}></a>
                        <a className="card-img" style={{backgroundImage: "url('https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg')"}}></a>
                    </div>
                </div>
            </section>
            <section className="flex horizontal-center">
                <div className="container container-space">
                    <h1 className="text-center">Aprovecha Nuestro <strong>¡35% DE DESCUENTO!</strong></h1>
                    <div className="horizontal-col-2 gap-2em">
                        <img src="https://storagecdnvivienda.blob.core.windows.net/webviviendahuphpprincipal/principal/uploads/banner-web19020x650--2023-09-01--16-42-18.jpg"/>
                        <Card className="card-secondary flex column-direction gap-1em">
                            <h3 className="text-color-secondary-1 text-center">Si realizas una compra al contado, llévate un súper descuento del 35%</h3>
                            <video controls>
                                <source src="https://www.dmaninmobiliaria.com/Inicio/Video.mp4" type="video/mp4"></source>
                            </video>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="flex horizontal-center">
                <div className="container container-space">
                    <h1 className="text-center">CONTACTO</h1>
                    <Form>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <Button className="button button-secondary">Boton</Button>
                    </Form>
                </div>
            </section>
            <section className="flex horizontal-center">
                <div className="container container-space">
                    <h1 className="text-center">TITULO</h1>
                    <div className="horizontal-col-4 gap-2em">
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="flex horizontal-center">
                <div className="container container-space">
                    <h1 className="text-center">TITULO</h1>
                    <div className="horizontal-col-4 gap-2em">
                        <Card className="card-secondary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-primary">Boton</Button>
                        </Card>
                        <Card className="card-secondary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-primary">Boton</Button>
                        </Card>
                        <Card className="card-secondary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-primary">Boton</Button>
                        </Card>
                        <Card className="card-secondary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-primary">Boton</Button>
                        </Card>
                        <Card className="card-secondary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-primary">Boton</Button>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="flex horizontal-center color-primary-1">
                <div className="container container-space">
                    <h1 className="text-center text-color-secondary-1">TITULO</h1>
                    <div className="horizontal-col-4 gap-2em">
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                        <Card className="card-primary flex column-direction text-center">
                            <i className="fa fa-car"></i>
                            <h3>Titulo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                            <Button className="button button-secondary">Boton</Button>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="flex horizontal-center">
                <div className="container container-space">
                    <h1 className="text-center">TITULO</h1>
                    <div className="horizontal-col-2 gap-2em">
                        <Card className="card-primary">
                            <div className="flex gap-2em row-direction vertical-center">
                                <i className="fa fa-car"></i>
                                <div className="flex column-direction">
                                    <h3 className="text-center">Titulo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                                    <Button className="button button-secondary">Boton</Button>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-primary">
                            <div className="flex gap-2em row-direction vertical-center">
                                <i className="fa fa-car"></i>
                                <div className="flex column-direction">
                                    <h3 className="text-center">Titulo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                                    <Button className="button button-secondary">Boton</Button>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-primary">
                            <div className="flex gap-2em row-direction vertical-center">
                                <i className="fa fa-car"></i>
                                <div className="flex column-direction">
                                    <h3 className="text-center">Titulo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                                    <Button className="button button-secondary">Boton</Button>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-primary">
                            <div className="flex gap-2em row-direction vertical-center">
                                <i className="fa fa-car"></i>
                                <div className="flex column-direction">
                                    <h3 className="text-center">Titulo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                                    <Button className="button button-secondary">Boton</Button>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-primary">
                            <div className="flex gap-2em row-direction vertical-center">
                                <i className="fa fa-car"></i>
                                <div className="flex column-direction">
                                    <h3 className="text-center">Titulo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem vero minus itaque quaerat</p>
                                    <Button className="button button-secondary">Boton</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="flex horizontal-center">
                <div className="container container-space">
                    inicio 5
                </div>
            </section>
        </>
    )
}