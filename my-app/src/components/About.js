import React from "react";
import "./css/A_style.css"

function About(){
    return(
        <main>
        <div className="title">
           <h1>Meet our Team</h1>  
        </div>
         
        <div className=" profiles">
            <div className="row">
                <div className="col-sm-12">
                    <h2>"Love a Vehicle Right for Travel"</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    
                   
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Larry Weems</h1>
                             <img src="/images/larry.jpg" className="img-responsive profile-image" alt=""/>
                                <p>As Chief Executive Officer I .... Lorem ipsum dolor sit amet consectetur adip.</p>
                            </div>
                        </div>
                    
                </div>
                <div className="col-sm-3">
                    
                    
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Vanessa Dillon</h1>
                            <img src="/images/vanessa.jpg" className="img-responsive profile-image" alt=""/>
                                <p>As Chief Design Officer I .... Lorem ipsum dolor sit amet consecte</p>
                            </div>
                        </div>
                
                </div>
                <div className="col-sm-3">
                    

                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Rodney Smith</h1>
                            <img src="/images/rodney.jpg" className="img-responsive profile-image" alt=""/>
                                <p>As Chief Meta-data Officer I .... Lorem aliquidates excema dolorum.</p>
                            </div>
                        </div>
                </div>
                <div className="col-sm-3">
                

                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Travis Cooley</h1>
                            <img src="/images/travis.jpg" className="img-responsive profile-image" alt=""/>        
                                <p>As Chief Operating Officer I .... Lorem ipsum dolor sit amet consectetur adipis</p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
        <div className=" about">
            <div className="row">
                <div className="col-sm-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt adipisci ducimus qui facilisnsequatur neque molestiae facilis maiores dolor fuga nisi blanditiis voluptate vero, iste veniam dolorum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus veritatis, saepe odit vel assumenda enim officiaendi aspernatur, provident exercitationem veniam.</p>
                    <p>Lorepsam fugit dignissimos, quaerat debitis architecto repellendus incidunt tempore mollitia atque labore asperiores, repudiandae alias nulla doloribus.</p>
                </div>
            </div>
        </div>
        <div className="container testimonials">
            <div className="row t">
                <h2>Featured Testimonials</h2>
                <div className="col-sm-6">
                    <i className="far fa-user-circle fa-5x"></i>
                    <i className="fas fa-quote-left fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque impedit ratione nulla error. Reiciendis odio impedit ad tempore cum inventore natus saepe? Qui debitis, quod quisquam similique possimus placeat totam.</p>
                    <i className="fas fa-quote-right fa-2x"></i>
                </div>
                <div className="col-sm-6">
                    <i className="far fa-user-circle fa-5x"></i>
                    <i className="fas fa-quote-left fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deserunt accusamus vero dolores suscipit nemo nobis necessitatibus quam soluta a error dicta aut, dolorum consequuntur sequi quod recusandae, ullam quis!</p>
                    <i className="fas fa-quote-right fa-2x"></i>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-6">
                    <i className="far fa-user-circle fa-5x"></i>
                    <i className="fas fa-quote-left fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reprehenderit ut velit iusto ab explicabo molestias minus vel vero accusamus, pariatur numquam nemo! Perferendis provident eius totam officiis quod corrupti!</p>
                    <i className="fas fa-quote-right fa-2x"></i>
                </div>
                <div className="col-sm-6">
                    <i className="far fa-user-circle fa-5x"></i>
                    <i className="fas fa-quote-left fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis! Ipsum iste explicabo rem, nihil aut placeat eaque vitae at, sunt numquam asperiores magnam animi corrupti. Blanditiis eligendi atque illo.</p>
                    <i className="fas fa-quote-right fa-2x"></i>
                </div>
            </div>
        </div>
    </main>
    )
}

export default About