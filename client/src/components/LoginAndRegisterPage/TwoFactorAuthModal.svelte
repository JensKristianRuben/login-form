<script>
    let { class: className, onClose } = $props();

    function handleModalClick(event) {
        event.stopPropagation();
    }

    function handleKeydown(event) {
        if (event.key === "Escape") {
            onClose?.();
        }
    }
</script>

<div
    class="backlay {className}"
    onclick={onClose}
    onkeydown={handleKeydown}
    role="button"
    tabindex="0"
>
    <div
        class="twoFA-modal"
        onclick={handleModalClick}
        onkeydown={handleKeydown}
        role="button"
        tabindex="0"
    ></div>
</div>

<style>
    .backlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
    }

    .backlay.is-open {
        opacity: 1;
        visibility: visible;
    }

    .twoFA-modal {
        width: 700px;
        height: 300px;
        border: 1px solid rgb(255, 244, 244);
    }
</style>
