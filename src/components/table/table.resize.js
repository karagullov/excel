import { $ } from "../../core/dom";

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
    const $resizer = $(event.target);

    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $resizer.data.resize;
    const sideProp = type === "col" ? "bottom" : "right";
    let size;

    $resizer.css({
      opacity: 1,
      [sideProp]: "-5000px",
    });

    document.onmousemove = (e) => {
      if (type === "col") {
        const delta = e.pageX - coords.right;
        size = coords.width + delta;
        $resizer.css({ right: -delta + "px" });
      } else {
        const delta = e.pageY - coords.bottom;
        size = coords.height + delta;
        $resizer.css({ bottom: -delta + "px" });
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type === "col") {
        $parent.css({ width: size + "px" });
        $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => (el.style.width = size + "px"));
      } else {
        $parent.css({ height: size + "px" });
      }

      resolve({
        size,
        type,
        id: $parent.data[type],
      });

      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      });
    };
  });
}
