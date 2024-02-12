
function Home()
{
    return(
    <div className="mb-5">
        {/* first carousel */}

  <div class="container text-center text-light ">
  
  <div class="row">
    
    <div class="col">
    <div id="carouselExample" class="carousel slide ">
  <div class="carousel-inner rounded-5 "style={{"height":"400px","width":"90%","margin":"auto"}}>
    <div class="carousel-item active">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/73bf6c184364321.Y3JvcCwxNjcyLDEzMDgsNzkwLDEwNw.jpg" class="d-block w-100"style={{"height":"400px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.himalayanadventuretrips.com/wp-content/uploads/2022/02/events.jpg" class="d-block w-100"style={{"height":"400px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1562329265-95a6d7a83440?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100"style={{"height":"400px"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  

  



    
  </div>
</div>
{/* first carousel ends */}



{/* --------------------------------------------------------------------------- */}

{/* 6 boxes */}





<div class="container text-center text-light mt-5 ">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="card-group ">
 
  <div class="card bg-transparent border border-0">
   
    <div class="card-body">
    <div class="d-flex flex-row justify-content-around ">
  <div class="p-2  rounded-4 mx-1 box-w">
  <img src="nightlife.jpg"className="img-fluid px-1 rounded-circle"style={{"width":"40px","height":"40px"}} alt="" />
  <span className="text-light">Nightlife</span>
  </div>
  <div class="p-2 rounded-4 mx-1 box-w">  <img src="celebration.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Festivals</span></div>

  <div class="p-2 rounded-4 box-w tilted-card"> <img src="instruments.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Music</span></div>
</div>
    </div>
  </div>
  <div class="card bg-transparent border border-0">
    <div class="card-body">

    <div class="d-flex flex-row justify-content-between ">
  <div class="p-2 rounded-4 mx-1 box-w">
  <img src="workshop.jpg"className="img-fluid px-1 rounded-circle"style={{"width":"40px","height":"40px"}} alt="" />
  <span className="text-light">Workshop</span>
  </div>
  <div class="p-2 rounded-4 box-w">  <img src="theater.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Comedy</span></div>
  <div class="p-2 rounded-4 mx-1 box-w"> <img src="menu.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Theatre</span></div>
</div>
    </div>
  </div>
</div>    </div>
  </div>
</div>

{/* 6 boxes ends */}

{/* Recommended events starts */}

<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col mx-4">
    <p class="h2"><i class="bi bi-bookmark-star-fill "></i>Recommended Events</p>
    </div>
  </div>
</div>

<div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
  <div class="carousel-inner">
    


    <div class="carousel-item active">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://i.pinimg.com/736x/81/95/ff/8195ff91e44ffc4d814c1ee02f834d21.jpg"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          
          <div class="card-body text-light">
            <h6 class="card-title">Glasgow International Hosted</h6>
            <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>




    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://i.pinimg.com/736x/81/95/ff/8195ff91e44ffc4d814c1ee02f834d21.jpg"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
          <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>




    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
          <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>


    

    

    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
          <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://i.pinimg.com/736x/81/95/ff/8195ff91e44ffc4d814c1ee02f834d21.jpg"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* recommended events ends */}



{/* outdoor events starts */}

<div class="container-fluid text-light mt-5 bg-black bg-gradient rounded-5">
  <div class="row align-items-start">
    <div class="col mb-5 mx-4">
    <p class="h2 mx-5 mt-3 mb-3"><i class="fa-solid fa-champagne-glasses"></i>Outdoor Events</p>
<div id="carouselExampleControls1" class="carousel slide container" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://i.pinimg.com/736x/81/95/ff/8195ff91e44ffc4d814c1ee02f834d21.jpg"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
            <h6 class="card-title">Glasgow International Hosted</h6>
            <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://i.pinimg.com/736x/81/95/ff/8195ff91e44ffc4d814c1ee02f834d21.jpg"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
          <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>


    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>

            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>
            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
          <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>


    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards mx-1 width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://www.aljazeera.com/wp-content/uploads/2023/01/2023-01-01T074358Z_652705649_RC2HHY9MHGUY_RTRMADP_3_NEW-YEAR-USA-NEW-YORK.jpg?resize=1170%2C780&quality=80"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards mx-1 width bg-black rounded-2">
          <div class="image-wrapper ">
            <img src="https://music.columbia.edu/sites/default/files/styles/full/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=-CEMbI3h"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards width bg-black rounded-2">
        <div class="image-wrapper ">
            <img src="https://i.pinimg.com/736x/81/95/ff/8195ff91e44ffc4d814c1ee02f834d21.jpg"style={{"width":"310px","height":"300px"}} alt="..."className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">Glasgow International Hosted</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </div>
    
    
  </div>
</div>

{/* outdoor events ends */}





{/* featured events starts */}
<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder mx-4">Featured Events</p>
    </div>
  </div>
</div>

<div class="container-fluid text-center ">
  <div class="row align-items-start ">
  <div class="row ">
  <div class="col-sm-8 mb-3 mb-sm-0 ">
    <div class="card p-5 rounded-5 bg-black bg-gradient">
      <div class="card-body">
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0 d-flex align-items-center justify-content-center "style={{"height":"350px"}}>
    <div class="card border border-0 bg-transparent text-light ">
      <div class="card-body ">
        <h3 class="card-title fw-bold">Dinner party of</h3>
        <h3 class="card-title fw-bold"> Luis Family</h3>
        <a href="#" class="btn btn-primary mt-5 border border-0" style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Book Ticket</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 d-flex align-items-center justify-content-center">
    <div class="card border border-0 bg-transparent text-light">
      <div class="card-body">
        <h5 class="card-title">Starts in...</h5>
        <p class="card-text"><figure>
  <blockquote class="blockquote">
    <p className="h5">10 |06 |35 |42</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Days Hours <cite title="Source Title">min Sec</cite>
  </figcaption>
</figure>

<hr class="border border-dark border-1 "></hr></p>

<p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;West Harleyborough,UK</span></p>
<p class="card-text"><i class="bi bi-clock"></i><span>&nbsp;12:30 GMT</span></p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-4 position-relative second-card">
    <div class="card rounded-5 mt-5  top-0"style={{"height":"350px","marginLeft":"-100px"}}>
      <div class="card-body back">
    
      </div>
    </div>
  </div>
</div>
    
    
   
  </div>
</div>

{/* events this week starts */}

<div class="container text-light mt-5">
  <div class="row align-items-start">
   
    <div class="col">
    <p class="fs-2 fw-bolder mx-4">Events This Week</p>
    </div>
  </div>
</div>

<div class="container text-light mt-3 ">
  <div class="row align-items-start mx-3">
    
  
    <div class="col">
    <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Today</h5>
        
        <p class="card-text text-light">Wed, 10 Jan</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3  mb-3">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Tomorrow</h5>
        <p class="card-text text-light">Thu, 11 Jan</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Weekend</h5>
        <p class="card-text text-light">13-14 Jan</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>


{/* Events this week ends */}


{/* events you join starts */}

<div class="container text-light mt-5">
  <div class="row align-items-start">
    <div class="col">
    <p class="h2 mx-4">Events You Join</p>
    <div class="row">
  
    <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
        <div class="cards bg-black rounded-2">
          <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}} className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>

        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
            <div class="card-body text-light">
            <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>

            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>

        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
            <div class="card-body text-light">
            <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>


    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>


        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
            <div class="card-body text-light">
            <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>


            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>


    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>
            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>
            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
        <div class="cards bg-black rounded-2">
        <div class="image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_2zaZi5pFEQcV9k8xCK-oYe5rwSsvshDygyoUwkGX7EfYTjEBwhWVPdaW5G8pzPBhfU&usqp=CAU" alt="..."style={{"width":"410px","height":"300px"}}className="rounded-2"/>
          </div>
          <div class="card-body text-light">
          <h6 class="card-title">07 Glasgow International</h6>
          <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span>&nbsp;7th Mar,2024 |6:30 AM</span></p>
          <p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;ULAB Campus,Bangladesh</span></p>
            <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0"style={{"backgroundColor":"rgb(130, 7, 246)"}}>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  </div>
</div>
{/* events you join ends */}

{/* blog starts */}

<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col mx-4">
    <p class="fs-2 fw-bolder">Blog</p>
    </div>
  </div>
</div>


<div className="container">

<div id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
        <div class="cards">
          <div class="image-wrapper back9 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
            
          <p class="card-text text-light fw-bolder">Put on your shoes 'cause we're going dancing,again!</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back10 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Cakes,Cartoons,Crafts,Create something with digital workshops!</p>
          </div>
         
        </div>
        <div class="cards">
        <div class="image-wrapper back11 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Bake,brew and barbeque with interactive online food workshops</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back12 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">9 Creative Virtual Birthday Party Ideas</p>
          </div>
        
        </div>
      </div>
    </div>


    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards">
        <div class="image-wrapper back10 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Cakes,Cartoons,Crafts,Create something with digital workshops!</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back11 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Bake,brew and barbeque with interactive online food workshops</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back12 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">9 Creative Virtual Birthday Party Ideas</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back9 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
          <p class="card-text text-light fw-bolder">Put on your shoes 'cause we're going dancing,again!</p>
          </div>
         
        </div>
      </div>
    </div>


    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards">
        <div class="image-wrapper back11 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Bake,brew and barbeque with interactive online food workshops</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back12 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">9 Creative Virtual Birthday Party Ideas</p>
          </div>
         
        </div>
        <div class="cards">
        <div class="image-wrapper back9 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
          <p class="card-text text-light fw-bolder">Put on your shoes 'cause we're going dancing,again!</p>
          </div>
          
        </div>
        <div class="cards">
        <div class="image-wrapper back10 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Cakes,Cartoons,Crafts,Create something with digital workshops!</p>
          </div>
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="cards">
        <div class="image-wrapper back12 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">9 Creative Virtual Birthday Party Ideas</p>
          </div>
         
        </div>
        <div class="cards">
        <div class="image-wrapper back9 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
          <p class="card-text text-light fw-bolder">Put on your shoes 'cause we're going dancing,again!</p>
          </div>
         
        </div>
        <div class="cards">
        <div class="image-wrapper back10 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Cakes,Cartoons,Crafts,Create something with digital workshops!</p>
          </div>
         
        </div>
        <div class="cards">
        <div class="image-wrapper back11 card-footer d-flex align-items-end rounded-2"style={{"width":"310px","height":"300px"}}>
        <p class="card-text text-light fw-bolder">Bake,brew and barbeque with interactive online food workshops</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>


{/* blog ends */}





{/* artists start */}

<div class="container text-light mt-5">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder mx-3">Artists</p>
    </div>
  </div>
</div>





<div class="container text-light">
  <div class="row align-items-start">
    <div class="col d-flex flex-column">
    <div class="">
      <img src="https://img.freepik.com/free-photo/guitarist-man-playing-guitar-home_144627-28083.jpg?w=360"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-3">Monster Jam</div>
    
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-2">Mark Normand</div>
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://rb.gy/euu8ui"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-4">Bill Burr</div>
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://rb.gy/jo3a2p"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-4">Tom Segura</div>
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://rb.gy/euu8ui"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
  <div class="mx-4">Bill Burr</div>
 
    </div>
    <div class="col d-flex flex-column">
    <div class=""><img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg"width={120}height={120} class="rounded-circle border border-2 border-light" alt="..."/></div>
    <div class="mx-2">Mark Normand</div>
    </div>

  </div>
</div>


{/* artists ends */}




{/* subscribe section starts */}


<div class="container-fluid text-light mt-5 bg-black bg-gradient rounded-5">
  <div class="row align-items-start">
    <div class="col mx-4 text-light p-5">
    <div class="card bg-transparent text-light border-0">
  
  <div class="card-body text-center">
  <p class="card-text">Want to hear about the best things to do in your city?</p>

    <h1 class="card-title">SUBSCRIBE TO OUR NEWSLETTER</h1>
    <p class="card-text">Join our mailing list and stay up to date with the latest events around you</p>

    <div class="container text-center">
  <div class="row align-items-start">
   
  
    <div class="col">
    <form class="row row-cols-lg-auto g-3 align-items-center justify-content-center">
  <div class="col-12">
   
  <input class="form-control form-control-lg bg-dark" type="text" placeholder="Enter Email" aria-label=".form-control-lg example"/>

  </div>

  

  

  <div class="col-12">
  <button type="button" class="btn btn-primary btn-lg border border-0"style={{"backgroundColor":"blueviolet"}}>YES, IM IN</button>

  </div>

</form>
    </div>
  </div>
</div>



    

    
  </div>
</div>
    

    </div>  
    
    
  </div>
</div>

{/* subscribe section ends */}
    </div>)
}
export default Home;