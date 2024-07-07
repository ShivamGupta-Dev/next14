const ShopLayout = ({
    children 
}: {
        children: React.ReactNode
}) => {
    return(
        <div className="h-full flex items-center justify-center
       bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-orange-300 to-purple-800">
            {children}
        </div>
    );
}
export default ShopLayout;