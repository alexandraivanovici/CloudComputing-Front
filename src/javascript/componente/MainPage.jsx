import React from 'react';

function MainPage() {
    return (
        <div id="MainPage">
            <header>
                <h1 id="title">Dog Adoption Website</h1>

                <img id="top-pic" src="http://zubko.co.uk/wp-content/uploads/2022/02/peeking-dog-min.png" alt="Cute Dog Stare" />
            </header>

            <main>
                <form id="survey-form">

                    <div id="todays-date">
                        <label class="main-label" for="todays-date">Today's Date: </label>
                        <select name="day">
                            <option value="day">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select name="month">
                            <option value="month">Month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>
                        <select name="year">
                            <option value="" e="year">Year</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>

                    <div id="dogName">
                        <label class="main-label" for="dogNameLabel">Name of the dog you wish to adopt: </label>
                        <input type="text" id="dogNameLabel" placeholder="Dog Name" required />
                    </div>

                    <div id="first-last-name">
                        <label class="main-label" id="name-label">First Name: </label>
                        <input type="text" id="name" placeholder="John" required />

                        <label class="main-label">Last Name: </label>
                        <input type="text" id="lastName" placeholder="Smith" required />
                    </div>

                    <div id="email">
                        <label class="main-label" for="emailLabel">Your email: </label>
                        <input type="text" id="emailLabel" placeholder="Email address" required />
                    </div>

                    <div id="prepare">
                        <label class="main-label">Why do you want to adopt and from which country?</label>
                    </div>
                    <div id="textarea">
                        <textarea id="comments"
                            rows="10" cols="70" placeholder="Write here why do you want to adopt"></textarea>
                    </div>

                    <div id="button">
                        <button type="submit" id="submit">Submit to recieve a confirmation email!</button>
                    </div>

                </form>


                <table id="survey-form">

                <label class="display-label">Latest Applicants</label>

                    <div class="row">
                        <div class="column">
                        <label class="main-label">First Name</label>
                        </div>
                        <div class="column">
                        <label class="main-label">Last Name</label>
                        </div>
                        <div class="column">
                        <label class="main-label">Dog</label>
                        </div>
                    </div>



                </table>




            </main>

            <div id="above-footer">
                <img id="bottom-pic" src="http://zubko.co.uk/wp-content/uploads/2022/02/purepng.com-doganimalsdogboy-981524673170o7rle.png" alt="Lying dog staring up" />
            </div>


        </div>
    );
}

export default MainPage;