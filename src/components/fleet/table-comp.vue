<template>
      <div class="shipsTable">
        <b-row :class="{active: i === activeItem}" :key="i" @click="selectItem(i)" class="shipWrap" no-gutters v-for="(ship, i) in shipsData">
          <b-col class="shipsTable__item" cols="5" sm="6" md="4" offset-sm="0" xl="4" v-if="tableHeaders[0]">
            <div class="shipsTable__item-head">{{tableHeaders[0] || 'Судно'}}</div>
            <div class="shipsTable__item-value" v-if="ship.link"><a :href="ship.link" target="new_blank" class="shipsTable__item-link"><span>{{ ship.name }}</span></a></div>
            <div class="shipsTable__item-value" v-else>{{ ship.name }}</div>
          </b-col>
          <b-col class="shipsTable__item" cols="3" sm="3" md="3" xl="3" v-if="tableHeaders[1]">
            <div class="shipsTable__item-head">{{tableHeaders[1] || 'Фут³'}}</div>
            <div class="shipsTable__item-value">{{ ship.foots }}</div>
          </b-col>
          <b-col class="shipsTable__item" cols="4" sm="3" md="3" xl="3" v-if="tableHeaders[2]">
            <div class="shipsTable__item-head justify-content-end justify-content-md-start">{{tableHeaders[2] || 'Палуба м²'}}</div>
            <div class="shipsTable__item-value justify-content-end justify-content-md-start">{{ ship.deck }}</div>
          </b-col>
          <b-col class="shipsTable__item" cols="4" sm="3" offset="8" offset-sm="9" offset-md="0" md="2" order="2" order-md="0" xl="2" v-if="tableHeaders[3]">
            <div class="shipsTable__item-head justify-content-end justify-content-md-start">{{tableHeaders[3] || 'Построено'}}</div>
            <div class="shipsTable__item-value justify-content-end justify-content-md-start">{{ ship.launched }}</div>
          </b-col>
		  <!--
          <b-col class="shipsTable__item d-none d-xl-block" cols="4" md="3" xl="3" v-if="tableHeaders[4]">
            <div class="shipsTable__item-head">{{tableHeaders[4] || 'Рефрижераторные заглушки'}}</div>
            <div class="shipsTable__item-value">{{ ship.plugs }}</div>
          </b-col>
		  -->
		  <!--
          <b-col class="shipsTable__item" cols="4" md="3" offset="4" offset-md="0" order="1" order-md="2" text-right xl="3" v-if="tableHeaders[5]">
            <div class="shipsTable__item-head">{{tableHeaders[5] || 'Грузовые краны'}}</div>
            <div class="shipsTable__item-value">{{ ship.cranes }}</div>
          </b-col>
		  -->
        </b-row>
      </div>
</template>

<script>
    export default {
        name: 'tableComp',
        components: {},

        props: {
            shipsData: {
                type: Array,
                default() {
                    return [];
                }
            },
            tableHeaders: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data: () => ({
            activeItem: null,
        }),
        methods: {
            selectItem(i) {
                this.activeItem = i
            }
        }
    }
</script>

<style lang="less">
  @import '../../less/variables.less';

  .tableSection {

    .up(@lg; {
    });
  }

  .shipsTable {
    color: @white;
    padding-bottom: 40px;

    &__item {
      max-height: 100px;
      overflow: hidden;
      transition: .3s;

      &-head {
        display: none;
        text-transform: capitalize;

        .up(@md; {
          text-transform: unset;

          span {
            &::after {
              content: " ";
              white-space: pre;
            }
          }
        });

        .up(@md; {
          //background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), @active;
        });
      }

      &-value {
        font-weight: 300;
        display: flex;
        align-items: center;

        a {
          color: @active;
        }
      }

      &:nth-last-child(1) {
        max-height: 0;

        .shipsTable__item-head {
          display: flex;
          align-items: center;
          background: transparent;

          .up(@md; {
            display: none;
          });
        }

        .up(@md; {
          max-height: none;
        });
      }

      &:first-child {
        .shipsTable__item-value {
          position: relative;

          &::before {
            display: block;
            content: "";
            width: 30px;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='7' height='13' viewBox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.5' d='M0.169533 12.8405C0.269595 12.9418 0.405566 12.9992 0.547656 13C0.618174 13.0006 0.688084 12.9868 0.753103 12.9594C0.818122 12.932 0.876881 12.8915 0.925779 12.8405L6.84192 6.88607C6.89199 6.83644 6.93175 6.77731 6.95889 6.71212C6.98603 6.64693 7 6.57698 7 6.50632C7 6.43567 6.98603 6.36571 6.95889 6.30052C6.93175 6.23533 6.89199 6.17621 6.84192 6.12658L0.925779 0.170261C0.876754 0.117627 0.817686 0.0754367 0.752092 0.0461995C0.686498 0.0169623 0.615717 0.00127613 0.543963 7.46723e-05C0.472209 -0.00112678 0.400947 0.012181 0.334419 0.039206C0.267891 0.0662309 0.207456 0.106421 0.15671 0.157384C0.105965 0.208346 0.0659476 0.269041 0.0390381 0.335855C0.0121287 0.402668 -0.00112197 0.474236 7.43542e-05 0.546299C0.00127067 0.618361 0.0168897 0.689445 0.0460019 0.755321C0.0751141 0.821197 0.117124 0.880518 0.169533 0.929753L5.70755 6.50632L0.169533 12.081C0.119687 12.1308 0.0801292 12.1899 0.0531358 12.2551C0.0261425 12.3203 0.0122459 12.3902 0.0122459 12.4607C0.0122459 12.5313 0.0261425 12.6012 0.0531358 12.6664C0.0801292 12.7316 0.119687 12.7907 0.169533 12.8405Z' fill='%23333B45'/%3E%3C/svg%3E%0A");
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center;
            transition: .3s;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);

            .up(@md; {
              content: none;
            });
          }
        }
      }

      .up(@md; {
        max-height: 120px;
      });

      .up(@lg; {
        max-height: none;
      });

       &-link {
         line-height: 1;
        span {
          color: @white !important;
          border-bottom: 1px solid @white;

          transition: 0.3s linear border-bottom-color;
        }

        &:hover,
        &:focus {
          span {
            border-bottom-color: transparent;
          }
        }
      }
    }

    & > .row {
      margin: 0;
    }

    .shipWrap {

      .shipsTable__item {
        div {
          padding-right: 15px;
          padding-left: 0;
          height: 50px;

          .up(@md; {
            //height: 60px;
            padding-left: 15px;
          });
          .up(@lg; {
            //height: 80px;
          });
        }

        &:first-child {
          div {
            padding-left: 30px;
          }
        }

        &:nth-last-child(1) {
          & > div {
            height: 50px;

            &:first-child {
              padding-top: 10px;

              .up(@md; {
                padding-top: 0;
              });
            }

            &:last-child {
              padding-bottom: 10px;

              .up(@md; {
                padding-bottom: 0;
              });
              .up(@lg; {
              });
            }

            .up(@md; {
              //height: 60px;
            });

            .up(@lg; {
              //height: 80px;
            });
          }
        }

        &-value {
          background-color: @tableFirstRow;
        }
      }

      &.active {

        .shipsTable__item {
          &:nth-last-child(1),
          &:nth-last-child(3) {

            max-height: 120px;

            .up(@md; {
              max-height: none;
            });
          }

          &-value {
            &::before {
              transform: translateY(-50%) rotate(90deg);
            }
          }
        }

        .down(@md;{
          background: #002250;
        });
      }

      &:first-child {
        .shipsTable__item {
          &-head {
            display: flex;
            align-items: center;
          }

          &:nth-child(-n+3) {
            .shipsTable__item-head {
              //background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), @active;
              background: @tableFirstRow;

              .down(@md;{
                  height: 60px;
              });
            }

            .down(@md;{
              max-height: 110px;
            });
          }

          .up(@md; {
            .shipsTable__item-head {
              //background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), @active;
              background: @tableFirstRow;
              height: 65px;
            }
          });

          .up(@lg; {
            .shipsTable__item-head {
              height: 76px;
            }
          });
        }
      }

      &:nth-child(odd) {

        .shipsTable__item-value {
          background-color: @tableSecondRow;
        }
      }

      &:hover {

        .down(@md; {
          //background-color: #EFF3F9;
          //cursor: pointer;
        });
      }
    }

    .up(@lg; {
      padding-bottom: 80px;
    })
  }
</style>
