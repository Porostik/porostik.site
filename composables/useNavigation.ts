const routes = [
  { name: "index", path: "/" },
  { name: "about", path: "/about" },
  { name: "technologies", path: "/technologies" },
];

export const useNavigation = () => {
  const route = useRoute();

  const currentRouteIndex = routes.findIndex((r) => r.name === route.name);

  return {
    prevRoute: routes[currentRouteIndex - 1]?.path || null,
    nextRoute: routes[currentRouteIndex + 1]?.path || null,
  };
};
