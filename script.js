document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value.match(/[0-9]/)) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else {
                e.target.value = "";
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (input.value === "" && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    // Auto-focus the first input field on page load
    inputs[0].focus();
});