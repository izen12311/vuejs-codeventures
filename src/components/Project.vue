<template>
    <div id="project">

        <div class="bg_project">
            <p class="projectIntro">{{ tabName }}</p>
        </div>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <p align="center">진행중인 프로젝트가 없습니다.</p><br/><br/> <br/><br/> <br/><br/>
        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
    </div>


</template>

<script>

    export default {

        name: 'project',
        data() {
            return {

                tabName: 'Project',

            }
        }
    }
</script>
