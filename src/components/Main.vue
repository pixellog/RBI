<template>
    <div class="main">
        <div class="min-vh-100 p-3">

            <header class="pb-3">
                <b-row>
                    <b-col class="d-flex align-items-center">
                        <img src="/assets/images/icon.png" alt="" style="width: 40px;">
                        <router-link to="/" class="ml-2 h5 mb-0 text-dark font-weight-bold">RBI 모니터링</router-link>
                    </b-col>
                    <b-col class="text-right">
                        <b-button size="sm" variant="light" class="shadow-sm bg-white rounded-lg px-3 text-secondary">
                            2020-06-25 14:23
                            <b-icon icon="arrow-clockwise" class="ml-1" font-scale="1.2"/>
                        </b-button>
                    </b-col>
                </b-row>
            </header>

            <section class="shadow-lg rounded-lg">
                <b-row no-gutters>
                    <b-col cols="10" class="rounded-left position-relative overflow-hidden bg-secondary" style="height: calc(100vh - 88px)">
                        <!-- 지도영역 -->
                        <img src="/assets/images/map-bg.png" alt="" style="position:absolute; width: 100%; height: 100%; border-radius: 10px 0 0 10px;">

                        <!-- controller -->
                        <div style="position:absolute; right: 10px;bottom: 10px; z-index: 1000">
                            <b-button size="sm" variant="light" class="shadow" block>
                                <b-icon font-scale="1.2" icon="cursor-fill"/>
                            </b-button>
                            <b-button size="sm" variant="light" class="shadow" block>
                                <b-icon font-scale="1.2" icon="plus"/>
                            </b-button>
                            <b-button size="sm" variant="light" class="shadow" style="margin-top: 1px;">
                                <b-icon font-scale="1.2" icon="dash"/>
                            </b-button>
                        </div>

                        <div class="position-absolute w-100 h-100">


                            <div v-for="(item,index) in ['primary','success','warning', 'danger']">
                                <b-link v-b-modal="'modal-detail'" :id="`popover-target-${item}`" class="position-absolute" :style="`left: calc(200px * ${index+1}); top: calc(200px * ${index+.5});`">
                                    <img :src="`/assets/images/spot-${item}.png`" alt="">
                                </b-link>

                                <b-popover :target="`popover-target-${item}`" triggers="hover" placement="top" variant="danger" custom-class="border-0 shadow-sm">
                                    <template v-slot:title>그룹 A, 그룹 B</template>
                                    <h5 class="mb-0 mt-2">한화건설 - 포레나루원시티 2</h5>
                                    <small class="text-secondary">인천광역시 서구 가정동 255-23</small>

                                    <hr style="margin-left: -12px; margin-right: -12px;">

                                    <div v-for="(item,index) in ['text-primary','text-success','text-warning','text-danger']">
                                        <div class="d-flex justify-content-between" :class="item">
                                            <span>소음센서 {{index}} - Leq</span>
                                            <span>65.6 dB(A)</span>
                                        </div>
                                    </div>
                                </b-popover>
                            </div>

                        </div>

                    </b-col>
                    <b-col cols="2" class="px-3 pt-3">

                        <div class="position-relative">
                            <b-input-group class="ml-auto border rounded">
                                <b-form-input type="search" @focus="search = true" class="border-0"></b-form-input>
                                <b-input-group-append>
                                    <b-button @click="search = false" class="text-secondary bg-white border-0">
                                        <b-icon font-scale="1.2" icon="search"/>
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="border p-3 rounded-lg position-absolute w-100 bg-white" style="top: 40px; z-index: 9999" v-if="search">
                                <div class="text-primary d-flex font-weight-bold">검색 결과[5개]
                                    <b-link class="ml-auto" @click="search = false">
                                        <b-icon font-scale="1.5" icon="x"/>
                                    </b-link>
                                </div>
                                <ul class="list-unstyled mb-0 mt-2">
                                    <li v-for="item in 5"><a href="#none" class="text-dark">현대건설 - 광교산 힐스테이트</a></li>
                                </ul>
                            </div>
                        </div>

                        <div role="tablist" class="mt-3" style="height: calc(100vh - 160px); overflow-x: hidden; overflow-y: auto">
                            <b-card no-body v-for="(item,index) in 12">
                                <b-card-header role="tab" header-class="p-0 border-0">
                                    <b-button block v-b-toggle="`accordion-${item}`" variant="dark" class="text-left">
                                        <span>그룹 {{item}}</span>
                                        <span class="float-right when-open"><b-icon class="ml-auto" icon="dash" variant="info" font-scale="1.5"/></span>
                                        <span class="float-right when-closed"><b-icon class="ml-auto" icon="plus" variant="info" font-scale="1.5"/></span>
                                    </b-button>
                                </b-card-header>
                                <b-collapse :id="`accordion-${item}`" :visible="index==0" accordion="my-accordion" role="tabpanel">
                                    <b-card-body class="p-0">

                                        <div class="px-3 py-2 border-bottom text-secondary">현장 목록 (4)</div>
                                        <div class="px-3">
                                            <div v-for="item in 3" class="my-3">
                                                <b-link v-b-modal="'modal-detail'" class="h6 text-dark">GS건설 - 파주 법원 {{item}}</b-link>
                                                <div v-for="(item,index) in ['text-primary','text-success','text-warning','text-danger']">
                                                    <div class="d-flex justify-content-between small" :class="item">
                                                        <span>소음센서 {{index}} - Leq</span>
                                                        <span>65.6 dB(A)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>

                        <Detail/>

                    </b-col>
                </b-row>
            </section>
        </div>
    </div>
</template>

<script>
    import Detail from "./_Detail";

    export default {
        name: 'Main',
        components: {Detail},
        data: function () {
            return {
                search: null
            }
        }
    }
</script>
