import {InitialState} from "@/typings";

/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { initialState: InitialState } | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin',
  };
}
