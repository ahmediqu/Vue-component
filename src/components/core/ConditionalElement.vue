<template>
    <div v-show="shouldDisplay">
        <slot>

        </slot>
    </div>
</template>
<script>
import inViewPort from 'in-viewport';
export default {
    name: 'ConditionalElement',
    props: {
        whenHidden: {
            required: true,
        }
    },
    data() {
        return {
            shouldDisplay: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.shouldDisplay = !inViewPort (
                document.querySelector(this.whenHidden)
            )
        });
    }
}
</script>