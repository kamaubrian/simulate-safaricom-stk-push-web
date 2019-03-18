<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn class="primary" large outline round v-on="on">Simulate Transaction</v-btn>
            </template>

            <v-card>
                <v-card-title>
                    <span class="headline">Simulate Transaction</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>

                            <v-flex xs12>
                                <v-text-field label="Email*" v-model="emailAddress" type="email" required
                                              outline></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Amount*" outline type="text" v-model="amount"
                                              required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Phone Number[2547*****]*" v-model="phoneNumber" outline type="text"
                                              required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" round outline flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" round outline flat @click="onProcessMockTransaction"
                           :disabled="!isFormValid || loading">
                        Simulate
                    </v-btn>
                </v-card-actions>
                <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
        data: () => ({
            dialog: false,
            emailAddress: '',
            phoneNumber: '',
            amount: ''

        }),
        computed: {
            isFormValid() {
                return this.emailAddress !== '' && this.phoneNumber !== '' && this.amount !== ''
            },
            loading(){
                return this.$store.getters.loading
            }
        },
        methods: {
            async onProcessMockTransaction() {
                let payload = {
                    phoneNumber: this.phoneNumber,
                    amount: this.amount,
                    accountReference: 'test',
                    description: 'test',
                    callBackURL: `https://security-node.herokuapp.com/api/v1/client/callback/?emailAddress=${this.emailAddress}`

                }
                await this.$store.dispatch('onProcessSTKPush',payload);
                this.emailAddress = ''
                this.phoneNumber = ''
                this.amount = ''
                this.dialog = false
            }
        }
    }
</script>