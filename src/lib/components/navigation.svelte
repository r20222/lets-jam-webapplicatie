<script>
    export let visible = true
     function ToggleMenu() {
         visible = !visible
     }
 </script>

 <header class="Header {visible ? 'visible-nav' : 'unvisible-nav'}" >
     <nav>
         <img src="/Ocean-Cleanup-Logo-Dark.png" alt="logo of The ocean cleanup" />
         <ul>
             <li>
                 <a href="https://theoceancleanup.com/" class="nav-link" aria-label="back to the homepage">
                     <span>Home</span>
                 </a>
             </li>
 
             <li>
                 <a href="/" class="nav-link active" aria-label="dashboard">
                     <span>Dashboard</span>
                 </a>
             </li>
 
             <li>
                 <a href="/" class="nav-link" aria-label="our river technology">
                     <span>Our Technology</span>
                 </a>
             </li>
 
             <li>
                 <a href="/" class="nav-link" aria-label="the economic impact">
                     <span>Economic Impact</span>
                 </a>
             </li>
 
             <li>
                 <a href="/" class="nav-link" aria-label="plastic sources ">
                     <span>Plastic Sources</span>
                 </a>
             </li>
 
             <li>
                 <a href="/" class="nav-link" aria-label="donate">
                     <span>Donate</span>
                 </a>
             </li>
 
             <li>
                 <a href="/" class="nav-link" aria-label="sign up to newsletter">
                     <span>Our Newsletter</span>
                 </a>
             </li>
         </ul>
         <button on:click={ToggleMenu}>HIDE MENU</button>
     </nav>
 </header>

 <button on:click={ToggleMenu}>SHOW MENU</button>
 

<style>
 ul,
 li {
     list-style: none;
 }

 ul {
     padding-left: 2rem;
     padding-right: 2rem;

 }
 a {
     text-decoration: none;
 }

 /* Nav */
 header {
     position: fixed;
     top: 0;
     left: 0;
     width: 100vw;
     height: 5.5rem;
     background-color: var(--whiteColor);
     box-shadow: var(--boxShadow) 0px 0px 8px;
     z-index: 100;
 }

 nav {
     height: 5.5rem;
     display: flex;
     flex-direction: row;
     -webkit-box-pack: justify;
     -ms-flex-pack: justify;
     justify-content: space-between;
     overflow: hidden;
 }

/* animatie visible/unvisible nav (r20222) */
 .visible-nav{
    transform: 0;
    transition:.1s;
}
 .unvisible-nav{
    transform: translateY(-5.5rem);
    transition:.1s;
}
 nav img {
     left: 0;
     top: 0;
     width: 11rem;
     height: 100%;
     padding: 0rem;
 }

 button {
    /* position:fixed; */
     background-color: #143653;
     border: 1px #fff solid;
     border-radius: 0.3rem;
     padding: 0.8rem;
     width: fit-content;
     margin: 0 auto;
     color: #fff;
     font-weight: 600;
     /* font-size: 1.5rem; */
     text-transform: uppercase;
     letter-spacing: 0.05rem;
 }

 button:hover {
     background-color: rgba(128, 128, 128, 0.332);
     cursor: pointer;
 }

 .nav-link {
     text-align: center;
     color: var(--darkBlue);
     /* font-size: 1.5rem; */
 }

 .nav-link span {
     display: none;
 }

 .active {
     color: var(--lightBlue);
 }

 /* Breakpoints medium screen */
 @media (min-width: 992px) {
     /* Nav */
     header {
         position: fixed;
         top: 0;
         left: 0;
         width: 250px;
         height: 100vh;
         box-shadow: var(--boxShadow) 0px 0px 8px;
     }

     nav img {
         width: 250px;
         height: auto;
     }

     nav {
         height: 100%;
         width:250px;
         flex-direction: column;
         justify-content: left;
         gap: 6rem;
         overflow: hidden;
     }


     /* animatie visible/unvisible nav (r20222) */
     .visible-nav{
        transform: 0;
        transition:.1s;
     }
     .unvisible-nav{
        transform: translateX(-250px);
        transition:.1s;
     }

     .nav-link {
         display: flex;
         justify-content: left;
         align-items: center;
         margin-bottom: 1rem;
         gap: 1rem;
     }

     .nav-link span {
         display: flex;
         justify-content: left;
         align-items: center;
         /* gap: 1rem; */
         font-weight: 600;
         /* font-size: 1.5rem; */
         text-transform: uppercase;
         letter-spacing: 0.05rem;
     }

     .nav-link span:hover {
         color: var(--lightBlue);
     }

     .active {
         color: var(--lightBlue);
     }
 }

 /* Breakpoints large screen */
 @media (min-width: 1200px) {
     .nav-link {
         display: flex;
         justify-content: left;
         align-items: center;
     }

     .nav-link span {
         display: flex;
         justify-content: left;
         align-items: center;
         gap: 1rem;
         font-weight: 600;
         font-size: 1rem;
         text-transform: uppercase;
         letter-spacing: 0.05rem;
     }

     .nav-link:hover {
         color: var(--lightBlue);
     }

     .active {
         color: var(--lightBlue);
     }
 }
</style>
