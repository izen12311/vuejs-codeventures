<template>
    <div id="design">
        <div class="bg_design">
            <p class="designIntro">{{ tabName }}</p>
        </div>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/><div class="table-responsive">
        <table class="table table-bordered">

            <thead>
            <tr>
                <th><center>Asset</center></th>
                <th><center>Description</center></th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td align="center"><img src="static/img/black-logo.png" style="height: 250px;"></td>
                <td align="center">codeventures.kr horizontal logo</td>

            </tr>
            <tr>
                <td align="center"></td>
                <td align="center">codeventures.kr square logo</td>

            </tr>

            </tbody>
        </table>
    </div>
        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
    </div>

    </div>
</template>

<script>

    export default {

        name: 'design',
        data() {
            return {

                tabName: 'Design',

            }
        }
    }
</script>