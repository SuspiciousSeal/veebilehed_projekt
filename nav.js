document.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Uued tooted</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vannitooted</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                            <a class="dropdown-item" href="#">Vannisoolad</a> 
                            <a class="dropdown-item" href="#">Vannipiimad</a> 
                            <a class="dropdown-item" href="#">Vannipommid</a>
                            <a class="dropdown-item" href="list.html">Seebid ja du&scaron;igeelid</a>
                        </div> 
                    </li> 
                    <li class="nav-item dropdown"> 
                        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kehahooldus</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                            <a class="dropdown-item" href="#">Kehakreemid</a> 
                            <a class="dropdown-item" href="#">Keha&otilde;lid</a> 
                            <a class="dropdown-item" href="#">Kehakoorijad</a> 
                            <a class="dropdown-item" href="#">Deodorandid</a> 
                            <a class="dropdown-item" href="#">K&auml;te ja jalgade hooldus</a>  
                        </div> 
                    </li> 
                    <li class="nav-item dropdown"> 
                        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">N&auml;ohooldus</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                            <a class="dropdown-item" href="#">Puhastus ja toniseerimine</a> 
                            <a class="dropdown-item" href="#">Niisutus ja toitmine</a> 
                            <a class="dropdown-item" href="#">Koorijad ja maskid</a> 
                        </div> 
                    </li> 
                    <li class="nav-item"><a class="nav-link" href="meist.html">Meist</a></li>
                </ul>
                <!-- search -->
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Otsi" aria-label="Search">
                    <button class="btn btn-outline-white my-2 my-sm-0" type="submit"><svg class="lnr lnr-magnifier"><use xlink:href="#lnr-magnifier"></use></svg></button>
                </form>
            </div>
            <!-- cart -->
            <!--
            <svg class="lnr mt-auto mr-3 my-3 lnr-cart"><use xlink:href="#lnr-cart"></use></svg>
            -->
            <a href="cart.html"><button class="btn btn-dark my-2 my-sm-0" type="submit" href="cart.html"><svg class="lnr lnr-cart"><use xlink:href="#lnr-cart"></use></svg></button></a>
        </nav>
`);