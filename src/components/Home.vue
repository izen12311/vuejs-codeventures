<template>
    <div id="home">
        <header id="myCarousel" class="carousel slide">
            <!-- Indicators
            <ol class="carousel-indicators">
                <!-- 임 <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                 <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol> -->
            <!-- Wrapper for Slides -->
            <div class="carousel-inner">
                <div class="item active">

                    <img src="../../static/img/wallpaper-hd-background-9.jpg" style="fill">
                    <div class="carousel-caption">
                        <a :href="recruitURL1"><p>청소년 개발팀 코드벤처스에서<br/>활동할 인재를 찾고있습니다.</p>

                            <p style="font-size:20px;margin-top:-20px;"><br>함께 키워나갈 구성원을 모집중에 있습니다.<br>자세한 내용은 여기를 클릭해주세요 !
                            </p></a>
                    </div>

                </div>

            </div>
            <!-- Controls -->
            <!-- 임시 <a class="left carousel-control" href="#myCarousel" data-slide="prev">
               <p class="slidebtn" style="font-size:30px;">&#xE000;</p>
             </a>
             <a class="right carousel-control" href="#myCarousel" data-slide="next">
               <p class="slidebtn" style="font-size:30px;">&#xE001;</p>
               <!--<span class="icon-next"></span> prev-->
            </a>
        </header>


    </div>


</template>

<style scoped>
    a:link {
        color: white;
    }

    a:visited {
        color: white;
    }

    a:active {
        color: white;
    }

    a:hover {
        text-decoration: none;
        color: white;
    }

</style>

<script>
    export default {
        name: 'home',
        data() {
            return {
                slide1Caption: '',
                slide1CaptionSub: '',
                recruitURL1: '/recruit',
            }
        }
    }
</script>
