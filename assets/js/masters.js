$(document).ready(() => {
    function getPageList(totalPages, page, maxLength) {
        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        let sideWidth = maxLength < 9 ? 1 : 2;
        let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }

        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
        }

        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }

        return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
    }

    $(function () {
        let numberOItemsAll = $(".card-content.all .card").length;
        let numberOItemsCC = $(".card-content.cc .card").length;
        let numberOItemsTE = $(".card-content.te .card").length;
        let numberOItemsRT = $(".card-content.rt .card").length;
        let limitPerPage = 6;
        let totalPagesAll = Math.ceil(numberOItemsAll / limitPerPage);
        let totalPagesCC = Math.ceil(numberOItemsCC / limitPerPage);
        let totalPagesTE = Math.ceil(numberOItemsTE / limitPerPage);
        let totalPagesRT = Math.ceil(numberOItemsRT / limitPerPage);
        let paginationSize = 7;
        let currentPage;

        function showPageAll(whichPage) {
            if (whichPage < 1 || whichPage > totalPagesAll) return false;

            currentPage = whichPage;

            let elems = document.querySelectorAll(".card-boder.active");

            [].forEach.call(elems, function (el) {
                el.classList.remove("active");
            });

            $(".card-content.all .card-boder").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show().toggleClass("active");


            $(".card-content.all .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPagesAll, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage)
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPagesAll);
            return true;
        }

        function showPageCC(whichPage) {
            if (whichPage < 1 || whichPage > totalPagesCC) return false;

            currentPage = whichPage;

            let elems = document.querySelectorAll(".card-boder.active");

            [].forEach.call(elems, function (el) {
                el.classList.remove("active");
            });

            $(".card-content.cc .card-boder").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show().toggleClass("active");


            $(".card-content.cc .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPagesCC, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage)
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPagesCC);
            return true;
        }

        function showPageTE(whichPage) {
            if (whichPage < 1 || whichPage > totalPagesTE) return false;

            currentPage = whichPage;

            let elems = document.querySelectorAll(".card-boder.active");

            [].forEach.call(elems, function (el) {
                el.classList.remove("active");
            });

            $(".card-content.te .card-boder").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show().toggleClass("active");


            $(".card-content.te .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPagesTE, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage)
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPagesTE);
            return true;
        }

        function showPageRT(whichPage) {
            if (whichPage < 1 || whichPage > totalPagesRT) return false;

            currentPage = whichPage;

            let elems = document.querySelectorAll(".card-boder.active");

            [].forEach.call(elems, function (el) {
                el.classList.remove("active");
            });

            $(".card-content.rt .card-boder").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show().toggleClass("active");


            $(".card-content.rt .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPagesRT, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage)
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPagesRT);
            return true;
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" })
                .append($('<i class="fa fa-chevron-left"></i>'))),
            $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" })
                .append($('<i class="fa fa-chevron-right"></i>')))
        );

        $(".card-content.all .card-boder").show();
        showPageAll(1);

        $(document).on("click", ".pagination li.current-page:not(.active)", function () {
            if (document.querySelector(".dropdown-toggle label.selection").innerText === "All") {
                return showPageAll(+$(this).text());
            } else if (document.querySelector(".dropdown-toggle label.selection").innerText === "Core Courses") {
                return showPageCC(+$(this).text());
            } else if (document.querySelector(".dropdown-toggle label.selection").innerText === "Technical Electives") {
                return showPageTE(+$(this).text());
            } else {
                return showPageRT(+$(this).text());
            }
        });

        $(".next-page").on("click", function () {
            if (document.querySelector(".dropdown-toggle label.selection").innerText === "All") {
                return showPageAll(currentPage + 1);
            } else if (document.querySelector(".dropdown-toggle label.selection").innerText === "Core Courses") {
                return showPageCC(currentPage + 1);
            } else if (document.querySelector(".dropdown-toggle label.selection").innerText === "Technical Electives") {
                return showPageTE(currentPage + 1);
            } else {
                return showPageRT(currentPage + 1);
            }
        });

        $(".previous-page").on("click", function () {
            if (document.querySelector(".dropdown-toggle label.selection").innerText === "All") {
                return showPageAll(currentPage - 1);
            } else if (document.querySelector(".dropdown-toggle label.selection").innerText === "Core Courses") {
                return showPageCC(currentPage - 1);
            } else if (document.querySelector(".dropdown-toggle label.selection").innerText === "Technical Electives") {
                return showPageTE(currentPage - 1);
            } else {
                return showPageRT(currentPage - 1);
            }
        });

        document.querySelectorAll(".dropdown-item label").forEach(el => {
            el.addEventListener('click', () => {
                document.querySelector(".dropdown-toggle label.selection").innerText = el.innerText;

                $(".card-content.all .card-boder").hide();
                $(".card-content.cc .card-boder").hide();
                $(".card-content.te .card-boder").hide();
                $(".card-content.rt .card-boder").hide();

                if (el.innerText === "All") {
                    $(".card-content.all .card-boder").show();
                    showPageAll(1);
                } else if (el.innerText === "Core Courses") {
                    $(".card-content.cc .card-boder").show();
                    showPageCC(1);
                } else if (el.innerText === "Technical Electives") {
                    $(".card-content.te .card-boder").show();
                    showPageTE(1);
                } else {
                    $(".card-content.rt .card-boder").show();
                    showPageRT(1);
                }
            });
        });

    });
});