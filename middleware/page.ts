import { ROUTES } from "~/constants";

export default defineNuxtRouteMiddleware((to, from) => {
  const toRouteIndex = ROUTES.findIndex((r) => r.name === to.name);
  const fromRouteIndex = ROUTES.findIndex((r) => r.name === from.name);

  const prevRoute = ROUTES[toRouteIndex - 1]?.path;
  const nextRoute = ROUTES[toRouteIndex + 1]?.path;

  to.meta.page = { prev: prevRoute, next: nextRoute };

  if (toRouteIndex > fromRouteIndex) {
    to.meta.pageTransition = { name: "slide-left", appear: true };
    from.meta.pageTransition = { name: "slide-left", appear: true };
  } else if (toRouteIndex < fromRouteIndex) {
    to.meta.pageTransition = { name: "slide-right", appear: true };
    from.meta.pageTransition = { name: "slide-right", appear: true };
  }
});
