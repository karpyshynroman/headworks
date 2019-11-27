import React from 'react';
import './main.scss';
import {Image, Card, CardGroup, Alert} from "react-bootstrap";

const Main = () => {
    return (
        <main>
            <Alert variant="dark">
                <Alert.Heading className={'alert-title'}>Hey, in this block you can find some of my projects.</Alert.Heading>
                <p>
                    There could be a text like my name is Roma and bla bla bla...but who needs it? So here it’s just text,<strong> I get high on coding</strong>
                    <div>
                        <Image src="https://cdn.cnn.com/cnnnext/dam/assets/180907100732-elon-musk-smokes-marijuana-podcast-1-large-169.jpg" thumbnail/>
                    </div>
                </p>
                <CardGroup className={'card-group'}>
                    <Card className={'card-group__item'}>
                        <span>
                            <Card.Img className={'card-group__image'} variant="top"
                                      src={require('../../assets/images/todo.jpg')}/>
                        </span>
                        <Card.Body>
                            <Card.Title className={'card-group__title'}>Todo App (React)</Card.Title>
                            <Card.Text>
                                Here is a nice Todo app.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Technology stack : HTML5/CSS3/, React, Local Storage.</small>
                        </Card.Footer>
                        <a href="https://karpyshynroman.github.io/react_todo-app/"
                           className="btn btn-outline-dark card-group__button" role="button">See</a>
                    </Card>
                        <Card className={'card-group__item'}>
                        <span>
                            <Card.Img className={'card-group__image'} variant="top"
                                      src="https://cdn1.iconfinder.com/data/icons/logos-brands-1/24/logo_brand_brands_logos_apple_ios-512.png"/>
                            <Card.Img className={'card-group__image'} variant="top"
                                      src={require('../../assets/images/wheelshop.jpg')}/>
                        </span>
                            <Card.Body>
                                <Card.Title className={'card-group__title'}>Wheelshop</Card.Title>
                                <Card.Text>
                                    I developed this ios application in my free time as a hobby.
                                    I promise a discount if you order a pair of wheels.
                                    <span>&#128181;&#128181;&#128181;</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Technology stack : XCode, Swift, Alamofire, SwiftyJson.</small>
                            </Card.Footer>
                            <a href="https://apps.apple.com/us/app/wheelshop/id1482952026?l=ru&ls=1"
                               className="btn btn-outline-dark card-group__button" role="button">Go to Appstore</a>
                        </Card>
                        <Card className={'card-group__item'}>
                            <span>
                                <Card.Img className={'card-group__image rounded'} variant="top"
                                          src={require('../../assets/images/dia.jpg')}/>
                            </span>
                            <Card.Body>
                                <Card.Title className={'card-group__title'}>Landing Page Dia</Card.Title>
                                <Card.Text>
                                    This is a nice landing page
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Technology stack : HTML5/CSS3/JS, SCSS, Figma, BEM.</small>
                            </Card.Footer>
                            <a href="https://karpyshynroman.github.io/dia/index.html"
                               className="btn btn-outline-dark card-group__button" role="button">See</a>
                        </Card>
                        <Card className={'card-group__item'}>
                            <span>
                                <Card.Img className={'card-group__image rounded'} variant="top"
                                          src={require('../../assets/images/miamy.jpg')}/>
                            </span>
                            <Card.Body>
                                <Card.Title className={'card-group__title'}>Landing Page Miamy</Card.Title>
                                <Card.Text>
                                    This is a simple but pretty landing page too
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Technology stack : HTML5/CSS3/JS, SCSS, Figma, BEM.</small>
                            </Card.Footer>
                            <a href="https://karpyshynroman.github.io/layout_miami2/src/index.html"
                               className="btn btn-outline-dark card-group__button" role="button">See</a>
                        </Card>
                </CardGroup>
            </Alert>
            <h2>Me on social media</h2>
            <div className="btn-group social" role="group" aria-label="Basic example">
                <a href="https://github.com/karpyshynroman?tab=repositories"
                   className="btn btn-secondary" role="button">My Github</a>
                <a href="https://www.facebook.com/roma.karpyshyn?ref=bookmarks"
                   className="btn btn-secondary" role="button">Facebook</a>
                <a href="https://www.linkedin.com/in/karpyshyn-roman-4b8151186/"
                   className="btn btn-secondary" role="button">LinkedIn</a>
            </div>
        </main>
    );
};

export default Main;
