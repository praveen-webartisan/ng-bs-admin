define(['require', 'exports'], function(require, exports) {

	exports.initBSComponents = () => {
		// Tooltip
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl);
		});

		// Toast
		var toastTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));
		toastTriggerList.map(function(toastTriggerEl) {
			let target = toastTriggerEl.getAttribute('data-bs-target');

			if(target) {
				toastTriggerEl.addEventListener('click', function() {
					let targetEl = document.querySelector(target);

					if(targetEl) {
						let toast = new bootstrap.Toast(targetEl);
						toast.show();
					}
				});
			}
		});
	};

	exports.toast = (message, title = 'Ng BS Admin') => {
		if(message) {
			let toastId = window.toastId ?? 1;
			let toastEl = document.createElement('DIV');
			toastEl.innerHTML = `<div class="toast-header">` + 
			`<strong class="me-auto">${title}</strong>` +
			`<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>` +
			`</div><div class="toast-body">${message}</div>`;
			toastEl.classList.add('toast');
			toastEl.classList.add('position-fixed');
			toastEl.classList.add('end-0');
			toastEl.classList.add('top-appNavbar');
			toastEl.setAttribute('role', 'alert');
			toastEl.setAttribute('role', 'alert');
			toastEl.setAttribute('aria-live', 'assertive');
			toastEl.setAttribute('aria-atomic', 'true');
			toastEl.setAttribute('id', `toast-${toastId}`);

			document.body.appendChild(toastEl);
			window.toastId = toastId + 1;

			let toast = new bootstrap.Toast(document.getElementById(`toast-${toastId}`));
			toast.show();
		}
	};

});
