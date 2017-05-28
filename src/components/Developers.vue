<template>
    <div id="developers">

        <div class="bg_developers">
            <p class="devIntro">{{ tabName }}</p>
        </div>

        <br/><br/><br><br>
        <div class="container bootstrap snippet">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-box no-header clearfix">
                        <div class="main-box-body clearfix">
                            <div class="table-responsive">
                                <table class="table user-list">
                                    <thead>
                                    <tr>
                                        <th><span>Name</span></th>
                                        <th><span>School</span></th>
                                        <th><span>Email</span></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="list in memberProfile">
                                        <td>
                                            <img :src="'../../static/img/member_img/'+list.image">
                                            <a :href="facebook_url" class="user-link">{{list.name}}</a> <span
                                                class="user-subhead">{{ list.rank }}</span>
                                        </td>

                                        <td>
                                            <a href="#">{{ list.school }}</a>
                                        </td>
                                        <td>
                                            <a href="#">{{ list.email }}</a>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <br><br><br><br>
    </div>


</template>

<style type="text/css">
    body {
        background: #eee;
    }

    .main-box.no-header {
        padding-top: 20px;
    }

    .main-box {
        background: #FFFFFF;
        -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;
        -moz-box-shadow: 1px 1px 2px 0 #CCCCCC;
        -o-box-shadow: 1px 1px 2px 0 #CCCCCC;
        -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;
        box-shadow: 1px 1px 2px 0 #CCCCCC;
        margin-bottom: 16px;
        -webikt-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    .table a.table-link.danger {
        color: #e74c3c;
    }

    .label {
        border-radius: 3px;
        font-size: 0.875em;
        font-weight: 600;
    }

    .user-list tbody td .user-subhead {
        font-size: 0.875em;
        font-style: italic;
    }

    .user-list tbody td .user-link {
        display: block;
        font-size: 1.25em;
        padding-top: 3px;
        margin-left: 60px;
    }

    a {
        color: #3498db;
        outline: none !important;
    }

    .user-list tbody td > img {
        position: relative;
        max-width: 50px;
        float: left;
        margin-right: 15px;
    }

    .table thead tr th {
        text-transform: uppercase;
        font-size: 0.875em;
    }

    .table thead tr th {
        border-bottom: 2px solid #e7ebee;
    }

    .table tbody tr td:first-child {
        font-size: 1.125em;
        font-weight: 300;
    }

    .table tbody tr td {
        font-size: 0.875em;
        vertical-align: middle;
        border-top: 1px solid #e7ebee;
        padding: 12px 8px;
    }
</style>


<script>

    export default {

        name: 'developers',
        data() {
            return {

                tabName: 'Developers',
                memberProfile: [
                    { // 김민근
                        name: 'Mingeun Kim',
                        type: '',
                        rank: 'Web Developer & UI Designer',
                        email: 'kmg@securityplus.or.kr',
                        school: '서울IT 고등학교',
                        facebook_url: 'http://fb.com/mingeun.kr',
                        image: 'mingeun.jpg'
                    }, { // 최지헌
                        name: 'Jihyun Choi',
                        type: '',
                        rank: 'Full Stack Developer',
                        email: 'admin@smaker.kr',
                        school: '대덕 소프트웨어마이스터 고등학교',
                        facebook_url: '',
                        image: 'jihyun.jpg'
                    },
                    { // 송주현
                        name: 'Juhyun Song',
                        type: '',
                        rank: 'Android Developer',
                        email: 'izen1231@gmail.com',
                        school: '숭실 고등학교',
                        facebook_url: '',
                        image: 'juhyun.jpg'
                    },
                    { // 이민석
                        name: 'Minseok Lee',
                        type: '',
                        rank: 'Planner',
                        email: 'melona.developer@gmail.com',
                        school: '서울IT 고등학교',
                        facebook_url: '',
                        image: 'minseok.jpg'
                    },

                ],
            }
        }
    }

</script>
