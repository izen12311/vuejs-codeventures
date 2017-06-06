<template>
    <div id="design">
        <div class="bg_design">
            <p class="designIntro">{{ tabName }}</p>
        </div>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

        <table cellpadding="0" cellspacing="0" border="0" class="datatable table table-striped table-bordered">
            <thead>
            <tr>
                <th><center>Asset</center></th>
                <th><center>Description</center></th>

            </tr>
            </thead>
            <tbody>
            <tr class="gradeX">

                <td><center><img src="static/img/black-logo.png" style="height:230px;width: 500px;"></center></td>
                <td>codeventures.kr horizontal logo</td>
            </tr>
            <tr class="gradeC">
                <td></td>
                <td>codeventures.kr square logo</td>
            </tr>
            </tbody>
        </table>

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