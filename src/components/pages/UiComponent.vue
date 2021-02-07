<template>
    <div>
        <p><a href="#cancel-modal">Cancel Modal</a></p>

            <modal name="cancel-modal">
                <h1 class="font-bold text-xl mb-2">Leaving So Soon?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore.
                </p>
                <template v-slot:footer>
                    <button
                        @click="$modal.hide('cancel-modal')"
                        class=""
                    >Cancel</button>
                    <a
                        href="#confirm-cancel-modal"
                        class=""
                    >Confirm Cancellation</a>
                </template>
            </modal>
            <modal name="confirm-cancel-modal">
                <h1 class="font-bold text-xl mb-2">new modal So Soon?</h1>
                
                <template v-slot:footer>
                    <button
                        @click="$modal.hide('cancel-modal')"
                        class=""
                    >Cancel</button>
                    <a
                        href="#confirm-cancel-modal-3"
                        class=""
                    >Confirm Cancellation</a>
                </template>
            </modal>
            <modal name="confirm-cancel-modal-3">
                <h1 class="font-bold text-xl mb-2">new modal So Soon -34</h1>
                
                <template v-slot:footer>
                    <button
                        @click="$modal.hide('cancel-modal')"
                        class=""
                    >Cancel</button>
                    <a
                        href="#confirm-cancel-modal"
                        class=""
                    >Confirm Cancellation</a>
                </template>
            </modal>
    </div>
</template>
