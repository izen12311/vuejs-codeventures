<template>
  <div id="developers">

      <div class="bg_developers">
        <p class="devIntro">{{ tabName }}</p>
      </div>

<br /><br />
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
                        <th class="text-center"><span>Rank</span></th>
                        <th><span>School</span></th>
                        <th><span>Email</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><!-- Mingeun Kim -->
                        <td>
                          <img src="../../static/img/member_img/mingeun.jpg" alt=""> <a href="" class="user-link">{{memberProfile[0].name}}</a> <span class="user-subhead">Director</span>
                        </td>
                                              <td class="text-center">
                          <span class="label label-default">{{ memberProfile[0].type }}</span>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[0].school }}</a>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[0].email }}</a>
                        </td>
                        <td style="width: 20%;">
                          <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link danger">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr><!-- Juhyun Song -->
                        <td>
                          <img src="../../static/img/member_img/juhyun.jpg" alt=""> <a href="#" class="user-link">{{ memberProfile[1].name }}</a> <span class="user-subhead">Director</span>
                        </td>
                       
                        <td class="text-center">
                          <span class="label label-default">{{ memberProfile[1].type }}</span>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[1].school }}</a>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[1].email }}</a>
                        </td>
                        <td style="width: 20%;">
                          <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link danger">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr><!-- Minseok Lee -->
                        <td>
                          <img src="../../static/img/member_img/minseok.jpg" alt=""> <a href="#" class="user-link">{{ memberProfile[2].name }}</a> <span class="user-subhead">Member</span>
                        </td>
                        
                        <td class="text-center">
                          <span class="label label-danger">{{ memberProfile[2].type }}</span>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[2].school }}</a>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[2].email }}</a>
                        </td>
                        <td style="width: 20%;">
                          <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link danger">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr><!-- Jihyun Choi -->
                        <td>
                          <img src="../../static/img/member_img/jihyun.jpg" alt=""> <a href="#" class="user-link">{{ memberProfile[3].name }}</a> <span class="user-subhead">Member</span>
                        </td>

                        <td class="text-center">
                          <span class="label label-default">{{ memberProfile[3].type }}</span>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[3].school }}</a>
                        </td>
                        <td>
                          <a href="#">{{ memberProfile[3].email }}</a>
                        </td>
                        <td style="width: 20%;">
                          <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> <a href="#" class="table-link danger">
                            <span class="fa-stack">
                              <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>
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

    </div>
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
          { name: 'Mingeun Kim', type: 'Web Developer', email:'kmg@securityplus.or.kr', school: '서울IT 고등학교', facebook_url: 'fb.com/mingeun.kr', image: '../../static/img/member_img/mingeun.jpg' }, // 김민근 Administrator
          { name: 'Juhyun Song', type: 'Android Developer', email: 'izen1231@gmail.com', school:'숭실 고등학교', facebook_url: '', image: '' }, // 송주현 Administrator
          { name: 'Minseok Lee', type: 'Planner & Developer', email: 'melona.developer@gmail.com', school:'서울IT 고등학교', facebook_url: '', image: '' }, // 이민석 Planner
          { name: 'Jihyun Choi', type: 'Full Stack Developer', email: 'admin@smaker.kr', school:'대덕 소프트웨어마이스터 고등학교', facebook_url: '', image: '' }, // 최지현 Developer
        ],
      }
    }
  }

</script>
