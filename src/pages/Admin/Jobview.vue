<template>
      <!-- Page Header Section Start -->
      <div class="page_header">
            <div class="heading_icon " >
                <div id="goBack" @click="goback" class="cursor-pointer" ><i class="pi pi-chevron-left"></i></div>
               <h3 class="hd">Job View</h3>
            </div>
          </div>
        <!-- Page Header Section End -->

        <div class="jobView">
            <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="persoanl_info">
                            <div class="top">
                                <div class="main">
                                    <div class="lside">
                                        <h5 class="primaryCol f29 fw6" >Postion: Goalkeeper</h5>
                                    </div>
                                    <div class="rside">
                                        <h5 class="primaryCol f29 fw6" >Postion: Goalkeeper</h5>
                                    </div>
                                </div>
                                <div class="main">
                                    <div class="d-flex align-items-center gap-4" >
                                        <p class="text black fw5">LeagueL Liga</p>
                                        <p class="text black fw5">Club Al Nasar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
        </div>

</template>

<script>
    export default{
        name : 'Jobview',
        methods : {
        goback(){
            window.history.back();
        }
    }
    }
</script>